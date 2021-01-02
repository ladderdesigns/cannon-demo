import React from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { Line } from "react-chartjs-2";
import { options, data, scenarioOne } from "../utils/chartInfo";

export const chartConfig = {
  type: "line",
  data: {},
};

const Index = () => (
  <Main
    meta={
      <Meta
        title="Cannon Demonstrative"
        description="The demonstrative for Dr. Robert Cannon - Gardner Consulting."
      />
    }
  >
    <div className="m-20">
      <Line data={data} options={options}></Line>
    </div>
    <div></div>
  </Main>
);

export default Index;
