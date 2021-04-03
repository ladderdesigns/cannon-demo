export const oneMeasurement = {
  order: 1,
  data: [null, null, null, 0.16, null, null],
  label: "One measurement",
  backgroundColor: "#92400E",
  borderColor: "#92400E",
  showLine: false,
  fill: false,
  pointRadius: [0, 0, 0, 10, 0],
  pointHoverBorderWidth: [0, 0, 0, 15, 0],
};

export const scenarioThree = {
  order: 1,
  data: [0.0, 0.162, 0.474, 0.16, 0.064, 0.01],
  label: "Possible curve #2",
  backgroundColor: "#EF4444",
  borderColor: "#EF4444",
  pointRadius: [0, 0, 0, 0, 0, 0],
  pointHoverBorderWidth: [0, 0, 0, 0, 0, 0],
  fill: false,
};

export const scenarioOne = {
  order: 2,
  data: [0.0, 0.09, 0.356, 0.16, 0.085, 0.035],
  label: "General curve",
  backgroundColor: "#10B981",
  borderColor: "#10B981",
  pointRadius: [0, 0, 0, 0, 0, 0],
  pointHoverBorderWidth: [0, 0, 0, 0, 0, 0],
  fill: false,
};

export const scenarioTwo = {
  order: 1,
  data: [0.0, 0.072, 0.224, 0.16, 0.102, 0.06],
  label: "Possible curve #1",
  backgroundColor: "#3B82F6",
  borderColor: "#3B82F6",
  pointRadius: [0, 0, 0, 0, 0, 0],
  pointHoverBorderWidth: [0, 0, 0, 0, 0, 0],
  fill: false,
};

export const initialData = {
  labels: [
    "(time unknown)",
    "12:42 AM",
    "(time unknown)",
    "2:58 AM",
    "(time unknown)",
    "(time unknown)",
  ],
  datasets: [],
};

export let annotations = [
  {
    type: "line",
    mode: "horizontal",
    scaleID: "y-axis-0",
    value: 0.16,
    borderColor: "#1F2937",
    borderWidth: 1,
    borderDash: [10, 5],
    showLine: false,
    label: {
      enabled: false,
      content: "Test label",
    },
  },
  {
    type: "line",
    mode: "vertical",
    scaleID: "x-axis-0",
    value: "2:58 AM",
    borderColor: "#1F2937",
    borderWidth: 1,
    borderDash: [10, 5],
    showLine: false,
    label: {
      enabled: false,
      content: "Test label",
    },
  },
];

export const config: any = {
  responsive: true,
  maintainAspectRatio: true,

  legend: {
    position: "right",
    labels: {
      fontSize: 16,
      fontColor: "#374151",
    },
  },
  tooltips: { enabled: false },
  hover: { mode: null },
  title: {
    display: true,
    text: "BAC Analysis - Robert Cannon M.D.",
    fontSize: 26,
    fontFamily: "'Helvetica'",
    fontColor: "#1F2937",
  },
  annotation: {},
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          fontSize: 20,
          fontColor: "#374151",
          labelString: "Time",
        },
        gridLines: {
          drawOnChartArea: false,
          color: "#1F2937",
        },
        ticks: {
          display: false,
          callback: function (value: String) {},
          fontSize: 20,
          fontColor: "#374151",
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          fontSize: 20,
          fontColor: "#374151",
          labelString: "Blood Alcohol Concentration (%)",
        },
        gridLines: {
          drawOnChartArea: false,
          color: "#1F2937",
        },
        ticks: {
          display: false,
          min: 0,
          max: 0.5,
          stepSize: 0.04,
          fontSize: 20,
          fontColor: "#374151",
          callback: function (value) {
            // if (value === 0.16) {
            //   return value + "%";
            // }
          },
        },
      },
    ],
  },
};
