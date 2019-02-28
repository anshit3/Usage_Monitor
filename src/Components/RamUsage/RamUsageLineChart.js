import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Time", "Usage"],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030]
];
const options = {
  title: "RAM",
  curveType: "function",
  legend: { position: "bottom" }
};
class ramUsageLineChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default ramUsageLineChart;
