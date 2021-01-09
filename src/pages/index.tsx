import React, { useState, useEffect } from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { Line } from "react-chartjs-2";
import {
  scenarioOne,
  scenarioTwo,
  scenarioThree,
  initialData,
  oneMeasurement,
  annotations,
  config,
} from "../utils/chartInfo";
import useKeyPress from "../hooks/useKeyPress";
import "chartjs-plugin-annotation";

const Index = () => {
  const [scenarioOneShown, setScenarioOneShown] = useState(false);
  const [scenarioTwoShown, setScenarioTwoShown] = useState(false);
  const [scenarioThreeShown, setScenarioThreeShown] = useState(false);
  const [oneMeasurementShown, setOneMeasurementShown] = useState(false);
  const [data, setData] = useState(initialData);
  const [options, setOptions] = useState(config);

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "0") {
        console.log("p is pressed");
        applyOneMeasurement();
      }
    });
  }, []);

  // useKeyPress(
  //   "Escape",
  //   () => {
  //     const value = applyOneMeasurement(data);
  //     console.log("updated is ", value);
  //     setData(value);
  //     console.log("updatedData is ", data);
  //   },
  //   data
  // );
  // learn arrow functions vs regular
  // pass in the value
  // return the updated data object

  function applyOneMeasurement() {
    if (!oneMeasurementShown) {
      console.log(data.datasets);
      let updatedDatasets = [...data.datasets, oneMeasurement];
      let updatedAnnotations = {
        annotations: annotations,
      };
      options.scales.xAxes.ticks = true;
      let updatedScales = options.scales;
      // set xAxes and yAxes
      updatedScales.xAxes[0].ticks.display = true;
      updatedScales.yAxes[0].ticks.display = true;
      setOptions({
        ...options,
        scales: updatedScales,
        annotation: updatedAnnotations,
      });

      setData({ ...data, datasets: updatedDatasets });
    }
  }

  const toggleScenarioOne = () => {
    if (!scenarioOneShown) {
      let updatedDatasets: object[] = [...data.datasets, scenarioOne];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioOneShown(true);
    } else {
      const updatedDatasets: object[] = data.datasets.filter((dataset) => {
        return dataset.label !== "Typical curve";
      });
      setData({ ...data, datasets: updatedDatasets });
      setScenarioOneShown(false);
    }
  };

  const toggleScenarioTwo = () => {
    if (!scenarioTwoShown) {
      let updatedDatasets = [...data.datasets, scenarioTwo];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioTwoShown(true);
    } else {
      const updatedDatasets: object[] = data.datasets.filter((dataset) => {
        return dataset.label !== "Possible curve #1";
      });
      setData({ ...data, datasets: updatedDatasets });
      setScenarioTwoShown(false);
    }
  };

  const toggleScenarioThree = () => {
    if (!scenarioThreeShown) {
      let updatedDatasets = [...data.datasets, scenarioThree];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioThreeShown(true);
    } else {
      const updatedDatasets: object[] = data.datasets.filter((dataset) => {
        return dataset.label !== "Possible curve #2";
      });
      setData({ ...data, datasets: updatedDatasets });
      setScenarioThreeShown(false);
    }
  };

  return (
    <div>
      <Main
        meta={
          <Meta
            title="Cannon Demonstrative"
            description="The demonstrative for Dr. Robert Cannon - Gardner Consulting."
          />
        }
      >
        <div className="mx-16 mt-20">
          <div className="flex w-full">
            <Line data={data} width={600} height={300} options={options}></Line>
          </div>
          <div className="flex justify-center w-full mt-6 text-xl">
            <button
              id="typical"
              className={
                "px-4 focus:outline-none focus:ring py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  " +
                (!scenarioOneShown
                  ? "opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent"
                  : "text-white bg-green-500 border-green-500 hover:border-transparent ")
              }
              onClick={() => toggleScenarioOne()}
            >
              Typical Curve
            </button>
            <button
              id="possible1"
              className={
                "transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  " +
                (!scenarioTwoShown
                  ? "opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent"
                  : "text-white bg-blue-500 border-blue-500 hover:border-transparent ")
              }
              onClick={() => toggleScenarioTwo()}
            >
              Possible Curve #1
            </button>
            <button
              id="possible2"
              className={
                "transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  " +
                (!scenarioThreeShown
                  ? "opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent"
                  : "text-white bg-red-500 border-red-500 hover:border-transparent ")
              }
              onClick={() => toggleScenarioThree()}
            >
              Possible Curve #2
            </button>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Index;
