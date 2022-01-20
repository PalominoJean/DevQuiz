import "./App.css";
import { useState } from "react";
import { calculateReturn } from "./helpers/calculateReturn";
import Button from "./components/Button";

function App() {
  // const gasStations = [1, 2, 3, 4, 5];
  // const costs = [3, 4, 5, 1, 2];
  // const initialIndex = 2;

  // let currentTank = 0;
  // let response = initialIndex;

  // const stationsCosts = gasStations.map((el, index) => [el, costs[index]]);
  // const stationsCostsOrdered = [
  //   ...stationsCosts.slice(initialIndex),
  //   ...stationsCosts.slice(0, initialIndex),
  // ];
  // stationsCostsOrdered.forEach((el) => {
  //   currentTank = currentTank + el[0];
  //   if (currentTank >= el[1]) {
  //     currentTank = currentTank - el[1];
  //   } else {
  //     response = -1;
  //     return;
  //   }
  // });

  // let arrayLength = 5;
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  // const [initialIndex, setInitialIndex] = useState(0);

  const onSetArrayLength = (el) => {
    setArray1(Array(Number(el)).fill(""));
    setArray2(Array(Number(el)).fill(""));
  };
  const updateArray1 = (el, index) => {
    let arrayTemp = array1;
    arrayTemp[index] = el;
    setArray1(arrayTemp);
  };
  const submit = () => {
    calculateReturn();
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
            onChange={(el) => onSetArrayLength(el.target.value)}
            className="border w-full rounded-md py-2 px-4 mt-1"
          />
        </div>
        <div className="mt-5">
          <label className="text-gray-800 block">
            ingrese la disponibilidad de los grifos:
          </label>
          <div className="mt-1">
            {array1.map((el, index) => (
              <input
                key={index}
                type="text"
                onChange={(el) => updateArray1(el.target.value, index)}
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
            {array2.map((el, index) => (
              <input
                key={index}
                type="text"
                className="border w-11 rounded-md py-2 px-4 m-1"
              />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <label className="text-gray-800 block">
            ingrese el index inicial:
          </label>
          <input
            type="text"
            onChange={(el) => onSetArrayLength(el.target.value)}
            className="border w-full rounded-md py-2 px-4 mt-1"
          />
        </div>
        <Button
          form="primary"
          type="submit"
          styles="mt-5 w-full flex justify-center items-center"
        >
          Calcular
        </Button>
      </div>
    </div>
  );
}

export default App;
