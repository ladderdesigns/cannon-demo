import React, { useState, useEffect } from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { Line } from "react-chartjs-2";
import { scenarioOne, scenarioTwo, scenarioThree } from "../utils/chartInfo";
import "chartjs-plugin-annotation";

const options = {
  responsive: true,
  maintainAspectRatio: true,

  legend: {
    position: "right",
    labels: {
      fontSize: 16,
    },
  },
  title: {
    display: true,
    text: "BAC Analysis - Robert Cannon M.D.",
    fontSize: 26,
    fontFamily: "'Helvetica'",
    fontColor: "#374151http://127.0.0.1:4040  ",
  },
  annotation: {
    annotations: [
      {
        type: "line",
        mode: "horizontal",
        scaleID: "y-axis-0",
        value: 0.16,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        borderDash: [10, 5],
        showLine: false,
        label: {
          enabled: false,
          content: "Test label",
        },
      },
    ],
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          fontSize: 20,
          labelString: "Known Times (AM)",
        },

        ticks: {
          callback: function (value: String) {
            if (value === "2:58 AM") {
              return value;
            }
          },
          fontSize: 20,
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          fontSize: 20,
          labelString: "Blood Alcohol Concentration (g/ml)",
        },
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          min: 0,
          max: 0.5,
          stepSize: 0.04,
          fontSize: 20,
          callback: function (value) {
            if (value === 0.16) {
              return value + "%";
            }
          },
        },
      },
    ],
  },
};

const initialData = {
  labels: [
    "(time unknown)",
    "12:42 AM",
    "(time unknown)",
    "2:58 AM",
    "(time unknown)",
    "(time unknown)",
  ],
  datasets: [
    {
      data: [null, null, null, 0.16, null, null],
      label: "One measurement",
      backgroundColor: "#78350F",
      showLine: false,
      borderColor: "#78350F",
      fill: false,
      pointRadius: [0, 0, 0, 10, 0],
      pointHoverBorderWidth: [0, 0, 0, 15, 0],
    },
  ],
};

const Index = () => {
  const [scenarioOneShown, setScenarioOneShown] = useState(false);
  const [scenarioTwoShown, setScenarioTwoShown] = useState(false);
  const [scenarioThreeShown, setScenarioThreeShown] = useState(false);
  const [data, setData] = useState(initialData);

  const applyScenarioOne = () => {
    if (!scenarioOneShown) {
      let updatedDatasets = [...data.datasets, scenarioOne];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioOneShown(true);
    }
  };

  const applyScenarioTwo = () => {
    if (!scenarioTwoShown) {
      let updatedDatasets = [...data.datasets, scenarioTwo];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioTwoShown(true);
    }
  };

  const applyScenarioThree = () => {
    if (!scenarioThreeShown) {
      let updatedDatasets = [...data.datasets, scenarioThree];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioThreeShown(true);
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
        <div className="mx-16 mt-10">
          <div className="flex w-full">
            <Line data={data} width={600} height={300} options={options}></Line>
          </div>
          <div className="flex justify-center w-full mt-6 text-xl">
            <button
              className={
                "px-4 py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  " +
                (!scenarioOneShown
                  ? "opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent"
                  : "text-white bg-green-500 border-green-500 hover:border-transparent ")
              }
              onClick={() => applyScenarioOne()}
            >
              Scenario one
            </button>
            <button
              className={
                "transition duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  " +
                (!scenarioTwoShown
                  ? "opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent"
                  : "text-white bg-blue-500 border-blue-500 hover:border-transparent ")
              }
              onClick={() => applyScenarioTwo()}
            >
              Scenario two
            </button>
            <button
              className={
                "transition duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  " +
                (!scenarioThreeShown
                  ? "opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent"
                  : "text-white bg-red-500 border-red-500 hover:border-transparent ")
              }
              onClick={() => applyScenarioThree()}
            >
              Scenario three
            </button>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Index;
