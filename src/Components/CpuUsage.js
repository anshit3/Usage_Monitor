import React from "react";
import Chart from "react-google-charts";

const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5
};

const getRandomNumber = () => {
  return Math.random() * 100;
};

class cpuUsage extends React.Component {
  state = {
    cpu: 55
  };
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["CPU", this.state.cpu],
    ];
  };
  componentWillUnmount() {
    if (this.intervalID === null) return;
    clearInterval(this.intervalID);
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(state => {
        return {
          ...state,
          cpu: getRandomNumber(),
        };
      });
    }, 3000);
  }
  render() {
    return (
      <div className="cpu-monitor">
        <Chart
          chartType="Gauge"
          width="100%"
          height="200px"
          data={this.getData()}
          options={options}
        />
      </div>
    );
  }
}

export default cpuUsage;