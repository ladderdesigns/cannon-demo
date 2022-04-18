import Head from 'next/head';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import 'chartjs-plugin-annotation';

export const oneMeasurement = {
  order: 1,
  data: [null, null, null, 0.16, null, null],
  label: 'One measurement',
  backgroundColor: '#92400E',
  borderColor: '#92400E',
  showLine: false,
  fill: false,
  pointRadius: [0, 0, 0, 10, 0],
  pointHoverBorderWidth: [0, 0, 0, 15, 0],
};

export const scenarioThree = {
  order: 1,
  data: [0.0, 0.162, 0.474, 0.16, 0.064, 0.01],
  label: 'Possible curve #2',
  backgroundColor: '#EF4444',
  borderColor: '#EF4444',
  pointRadius: [0, 0, 0, 0, 0, 0],
  pointHoverBorderWidth: [0, 0, 0, 0, 0, 0],
  fill: false,
};

export const scenarioOne = {
  order: 2,
  data: [0.0, 0.09, 0.356, 0.16, 0.085, 0.035],
  label: 'General curve',
  backgroundColor: '#10B981',
  borderColor: '#10B981',
  pointRadius: [0, 0, 0, 0, 0, 0],
  pointHoverBorderWidth: [0, 0, 0, 0, 0, 0],
  fill: false,
};

export const scenarioTwo = {
  order: 1,
  data: [0.0, 0.072, 0.224, 0.16, 0.102, 0.06],
  label: 'Possible curve #1',
  backgroundColor: '#3B82F6',
  borderColor: '#3B82F6',
  pointRadius: [0, 0, 0, 0, 0, 0],
  pointHoverBorderWidth: [0, 0, 0, 0, 0, 0],
  fill: false,
};

export const initialData = {
  labels: [
    '(time unknown)',
    '12:42 AM',
    '(time unknown)',
    '2:58 AM',
    '(time unknown)',
    '(time unknown)',
  ],
  datasets: [],
};

export const annotations = [
  {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: 0.16,
    borderColor: '#1F2937',
    borderWidth: 1,
    borderDash: [10, 5],
    showLine: false,
    label: {
      enabled: false,
      content: 'Test label',
    },
  },
  {
    type: 'line',
    mode: 'vertical',
    scaleID: 'x-axis-0',
    value: '2:58 AM',
    borderColor: '#1F2937',
    borderWidth: 1,
    borderDash: [10, 5],
    showLine: false,
    label: {
      enabled: false,
      content: 'Test label',
    },
  },
];

export const config = {
  responsive: true,
  maintainAspectRatio: true,

  legend: {
    position: 'right',
    labels: {
      fontSize: 16,
      fontColor: '#374151',
    },
  },
  tooltips: { enabled: false },
  hover: { mode: null },
  title: {
    display: true,
    text: 'BAC Analysis - Robert Cannon M.D.',
    padding: 40,
    fontSize: 26,
    fontFamily: "'Helvetica'",
    fontColor: '#1F2937',
  },
  annotation: {},
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          fontSize: 20,
          fontColor: '#374151',
          labelString: 'Time',
        },
        gridLines: {
          drawOnChartArea: false,
          color: '#1F2937',
        },
        ticks: {
          display: false,
          callback(value) {
            if (value === '12:42 AM' || value === '2:58 AM') {
              return value;
            }
            return null;
          },
          fontSize: 20,
          fontColor: '#374151',
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          fontSize: 20,
          fontColor: '#374151',
          labelString: 'Blood Alcohol Concentration (%)',
        },
        gridLines: {
          drawOnChartArea: false,
          color: '#1F2937',
        },
        ticks: {
          display: false,
          min: 0,
          max: 0.5,
          stepSize: 0.04,
          fontSize: 20,
          fontColor: '#374151',
          callback(value) {
            if (value === '0.16') {
              return value;
            }
            return null;
          },
        },
      },
    ],
  },
};

const Index = () => {
  const [scenarioOneShown, setScenarioOneShown] = useState(false);
  const [scenarioTwoShown, setScenarioTwoShown] = useState(false);
  const [scenarioThreeShown, setScenarioThreeShown] = useState(false);
  // const [oneMeasurementShown] = useState(false);
  const [data, setData] = useState(initialData);
  const [options] = useState(config);

  // function applyOneMeasurement() {
  //   if (!oneMeasurementShown) {
  //     const updatedDatasets = [...data.datasets, oneMeasurement];
  //     const updatedAnnotations = {
  //       annotations,
  //     };
  //     options.scales.xAxes.ticks = true;
  //     const updatedScales = options.scales;
  //     // set xAxes and yAxes
  //     updatedScales.xAxes[0].ticks.display = true;
  //     updatedScales.yAxes[0].ticks.display = true;
  //     setOptions({
  //       ...options,
  //       scales: updatedScales,
  //       annotation: updatedAnnotations,
  //     });
  //     setData({ ...data, datasets: updatedDatasets });
  //   }
  // }

  const toggleScenarioOne = () => {
    if (!scenarioOneShown) {
      const updatedDatasets = [...data.datasets, scenarioOne];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioOneShown(true);
    } else {
      const updatedDatasets = data.datasets.filter(
        (dataset) => dataset.label !== 'General curve',
      );
      setData({ ...data, datasets: updatedDatasets });
      setScenarioOneShown(false);
    }
  };

  const toggleScenarioTwo = () => {
    if (!scenarioTwoShown) {
      const updatedDatasets = [...data.datasets, scenarioTwo];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioTwoShown(true);
    } else {
      const updatedDatasets = data.datasets.filter(
        (dataset) => dataset.label !== 'Possible curve #1',
      );
      setData({ ...data, datasets: updatedDatasets });
      setScenarioTwoShown(false);
    }
  };

  const toggleScenarioThree = () => {
    if (!scenarioThreeShown) {
      const updatedDatasets = [...data.datasets, scenarioThree];
      setData({ ...data, datasets: updatedDatasets });
      setScenarioThreeShown(true);
    } else {
      const updatedDatasets = data.datasets.filter(
        (dataset) => dataset.label !== 'Possible curve #2',
      );
      setData({ ...data, datasets: updatedDatasets });
      setScenarioThreeShown(false);
    }
  };

  return (
    <>
      <Head>
        <title>BAC Analysis - Robert Cannon M.D.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-16 mt-10">
        <div className="flex w-full">
          <Line data={data} width={600} height={300} options={options} />
        </div>
        <div className="flex justify-center w-full mt-6 text-xl">
          <button
            type="button"
            id="general"
            className={`px-4 focus:outline-none focus:ring py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  ${
              !scenarioOneShown
                ? 'opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent'
                : 'text-white bg-green-500 border-green-500 hover:border-transparent '
            }`}
            onClick={() => toggleScenarioOne()}
          >
            General Curve
          </button>
          <button
            type="button"
            id="possible1"
            className={`transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  ${
              !scenarioTwoShown
                ? 'opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent'
                : 'text-white bg-blue-500 border-blue-500 hover:border-transparent '
            }`}
            onClick={() => toggleScenarioTwo()}
          >
            Possible Curve #1
          </button>
          <button
            type="button"
            id="possible2"
            className={`transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  ${
              !scenarioThreeShown
                ? 'opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent'
                : 'text-white bg-red-500 border-red-500 hover:border-transparent '
            }`}
            onClick={() => toggleScenarioThree()}
          >
            Possible Curve #2
          </button>
        </div>
      </div>

      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12">
          <div className="pt-8 mt-8">
            <p className="text-base text-center text-gray-800">
              &copy; Created by 2021
              {' '}
              <a
                className="font-bold underline hover:opacity-75"
                href="https://ladderdesigns.co"
              >
                Ladder Designs
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
