import React from "react";
import Chart from "react-google-charts";
import Service from '../Service'

const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5
};

class cpuUsage extends React.Component {
  state = {
    cpu: 0
  };
  intervalID = null;

  getUsage = async () => {

    let headers = {
        "content-type" : "application/json",
        }

    await Service.usage(headers).then( async (response) => {
          this.setState({ cpu : response.data.cpuUsagePercentage });
      }).catch(() => {
          console.log("Could not fetch usage");
      });
  };

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
          this.getUsage();
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
