import "./App.css";
import { useState } from "react";
import { calculateReturn } from "./helpers/calculateReturn";
import Button from "./components/Button";

function App() {
  const [stations, setStations] = useState([]);
  const [costs, setCosts] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);
  const [calculatedReturn, setCalculatedReturn] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [arrayLength, setArrayLength] = useState(0);

  const onChangeArrayLength = (el) => {
    if (submitted) setSubmitted(false);
    setArrayLength(el);
    setStations(Array(Number(el)).fill(null));
    setCosts(Array(Number(el)).fill(null));
  };
  const onChangeStation = (el, index) => {
    let arrayTemp = stations;
    arrayTemp[index] = Number(el);
    setStations(arrayTemp);
  };
  const onChangeCost = (el, index) => {
    let arrayTemp = costs;
    arrayTemp[index] = Number(el);
    setCosts(arrayTemp);
  };
  const onChangeInitialIndex = (el) => {
    if (submitted) setSubmitted(false);
    setInitialIndex(Number(el.target.value));
  };
  const submit = () => {
    setSubmitted(true);
    setCalculatedReturn(calculateReturn(stations, costs, initialIndex));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="App-header">
        <div>
          <label className="text-gray-800 block">
            ingrese el tamanio del array:
          </label>
          <input
            type="text"
            onChange={(el) => onChangeArrayLength(el.target.value)}
            className="border w-full rounded-md py-2 px-4 mt-1"
          />
        </div>
        {!!arrayLength && (
          <div>
            <div className="mt-5">
              <label className="text-gray-800 block">
                ingrese la disponibilidad de los grifos:
              </label>
              <div className="mt-1">
                {stations.map((el, index) => (
                  <input
                    key={index}
                    type="text"
                    onChange={(el) => onChangeStation(el.target.value, index)}
                    className="border w-11 rounded-md py-2 px-4 m-1"
                  />
                ))}
              </div>
            </div>
            <div className="mt-5">
              <label className="text-gray-800 block">
                ingrese el costo para ir al siguiente grifo:
              </label>
              <div className="mt-1">
                {costs.map((el, index) => (
                  <input
                    key={index}
                    type="text"
                    onChange={(el) => onChangeCost(el.target.value, index)}
                    className="border w-11 rounded-md py-2 px-4 m-1"
                  />
                ))}
              </div>
            </div>
            <div className="mt-5">
              <label className="text-gray-800 block">
                ingrese el grifo donde comenzara:
              </label>
              <input
                type="text"
                onChange={(el) => onChangeInitialIndex(el)}
                className="border w-full rounded-md py-2 px-4 mt-1"
              />
            </div>
            <Button
              form="primary"
              type="submit"
              styles="mt-5 w-full flex justify-center items-center"
              onClick={submit}
            >
              Calcular
            </Button>
          </div>
        )}
        {submitted && (
          <p
            className={`mt-5 ${
              calculatedReturn === -1 ? "text-red-500" : "text-teal-500"
            }`}
          >
            Su gasolina {calculatedReturn === -1 && "no"} sera suficiente para regresar
            al grifo {initialIndex}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
