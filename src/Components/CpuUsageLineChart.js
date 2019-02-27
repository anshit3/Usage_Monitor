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
  title: "CPU",
  curveType: "function",
  legend: { position: "bottom" }
};
class cpuUsageLineChart extends React.Component {
  render() {
    return (
      <div className="cpu-monitor-line">
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

export default cpuUsageLineChart;