import React, { useState, useEffect } from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { Line } from "react-chartjs-2";
import { scenarioOne, scenarioTwo, scenarioThree } from "../utils/chartInfo";

const options = {
  responsive: true,
  maintainAspectRatio: true,
  title: {
    display: true,
    text: "BAC Analysis - Robert Cannon M.D.",
    fontSize: 24,
    fontFamily: "'Helvetica'",
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Known Times (AM)",
        },
        ticks: {
          callback: function (value: String, index, values) {
            if (value === "2:58 AM") {
              return value;
            }
          },
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Blood Alcohol Concentration (g/ml)",
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 0.16) {
              return value;
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
      backgroundColor: "#374151",
      borderColor: "#374151",
      fill: false,
      pointRadius: [0, 0, 0, 7, 0],
      pointHoverBorderWidth: [0, 0, 0, 8, 0],
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
    <Main
      meta={
        <Meta
          title="Cannon Demonstrative"
          description="The demonstrative for Dr. Robert Cannon - Gardner Consulting."
        />
      }
    >
      <div className="mx-16 my-10">
        <div className="flex w-full">
          <Line data={data} width={600} height={280} options={options}></Line>
        </div>
        <div className="flex justify-center w-full mt-8">
          <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded opacity-25 hover:bg-blue-500 hover:text-white hover:border-transparent">
            Scenario one
          </button>
          <button
            className="px-4 mx-16 text-white bg-green-500 rounded-lg shadow hover:bg-green-600"
            onClick={() => applyScenarioOne()}
          >
            Scenario one
          </button>
          <button
            className="px-4 mx-16 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600"
            onClick={() => applyScenarioTwo()}
          >
            Scenario two
          </button>
          <button
            className="px-4 mx-16 text-white bg-red-500 rounded-lg shadow hover:bg-red-600"
            onClick={() => applyScenarioThree()}
          >
            Scenario three
          </button>
        </div>
      </div>
      <div></div>
    </Main>
  );
};

export default Index;
