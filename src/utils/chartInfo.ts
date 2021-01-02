export const options = {
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
          callback: function (value, index, values) {},
        },
      },
    ],
  },
};

export const data = {
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
      label: "Genesis Petrillo",
      backgroundColor: "#374151",
      borderColor: "#374151",
      fill: false,
    },
  ],
};

export const scenarioThree = {
  data: [0.0, 0.162, 0.474, 0.16, 0.06, 0.04],
  label: "High",
  backgroundColor: "#EF4444",
  borderColor: "#EF4444",
  fill: false,
};

export const scenarioTwo = {
  data: [0.0, 0.09, 0.356, 0.16, 0.095, 0.04],
  label: "Medium",
  backgroundColor: "#10B981",
  borderColor: "#10B981",
  fill: false,
};

export const scenarioOne = {
  data: [0.0, 0.042, 0.244, 0.16, 0.084, 0.05],
  label: "Low",
  backgroundColor: "#3B82F6",
  borderColor: "#3B82F6",
  fill: false,
};
