import "./App.css";
import { useState } from "react";
import { calculateReturn } from "./helpers/calculateReturn";
import Button from "./components/Button";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [initialIndex, setInitialIndex] = useState(0);
  const [calculatedReturn, setCalculatedReturn] = useState(null);
  const [errorSizeArray, setErrorSizeArray] = useState(false);

  const onChangeInitialIndex = (el) => {
    setCalculatedReturn(null);
    setInitialIndex(Number(el));
  };
  const submit = (form) => {
    let _stations = form.stations.split(",");
    let _costs = form.costs.split(",");

    if (_stations.length === _costs.length) {
      setErrorSizeArray(false);
      setCalculatedReturn(calculateReturn(_stations, _costs, initialIndex));
    } else {
      setErrorSizeArray(true);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="App-header">
        <form onSubmit={handleSubmit(submit)}>
          <div className="mt-5">
            <label className="text-gray-800 block">
              ingrese los grifos(separado por comas):
            </label>
            <div className="mt-1">
              <input
                type="text"
                className={`border w-full rounded-md py-2 px-4 m-1 ${
                  errors.stations?.message
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                {...register(`stations`, {
                  required: "Por favor ingrese como minimo 1 grifo",
                  pattern: {
                    value: /^(\d+,)+\d+$/,
                    message: "Ingrese un array valido",
                  },
                })}
              />
              {errors.stations && (
                <p className="text-sm font-medium mt-1 text-red-500">
                  {errors.stations.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <label className="text-gray-800 block">
              ingrese los costos(separado por comas):
            </label>
            <div className="mt-1">
              <input
                type="text"
                className={`border w-full rounded-md py-2 px-4 m-1 ${
                  errors.costs?.message ? "border-red-500" : "border-gray-200"
                }`}
                {...register(`costs`, {
                  required: "Por favor ingrese como minimo 1 costo",
                  pattern: {
                    value: /^(\d+,)+\d+$/,
                    message: "Ingrese un array valido",
                  },
                })}
              />
              {errors.costs && (
                <p className="text-sm font-medium mt-1 text-red-500">
                  {errors.costs.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <label className="text-gray-800 block">
              ingrese el grifo donde comenzara:
            </label>
            <input
              type="text"
              className={`border w-full rounded-md py-2 px-4 m-1 ${
                errors.initialIndex?.message
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              {...register(`initialIndex`, {
                required: "Por favor ingrese el grifo donde iniciara.",
                pattern: {
                  value: /^[0-9]\d*$/,
                  message: "Por favor ingrese un numero valido",
                },
              })}
              onChange={(e) => onChangeInitialIndex(e.target.value)}
            />
            {errors.initialIndex && (
              <p className="text-sm font-medium mt-1 text-red-500">
                {errors.initialIndex.message}
              </p>
            )}
          </div>
          {errorSizeArray && (
            <p className="text-sm font-medium mt-1 text-red-500">
              los arrays de grifos y costos deben ser del mismo tamanio
            </p>
          )}

          <Button
            form="primary"
            type="submit"
            styles="mt-5 w-full flex justify-center items-center"
          >
            Calcular
          </Button>
        </form>

        {calculatedReturn !== null && (
          <p
            className={`mt-5 ${
              calculatedReturn === -1 ? "text-red-500" : "text-teal-500"
            }`}
          >
            Su gasolina {calculatedReturn === -1 && "no"} sera suficiente para
            regresar al grifo {initialIndex}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
