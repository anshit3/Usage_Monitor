import React from "react";
import Chart from "react-google-charts";
import Service from '../Service'

const options = {
  title: "CPU",
  curveType: "function",
  legend: { position: "bottom" },
  animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
};

const initialData = [
  ["Time", "Usage"],
  ["0", 0],
];

class cpuUsageLineChart extends React.Component {

   state={
     data:[
       ...initialData
     ]
   }

  intervalID = null;

  getUsage = async () => {

    let headers = {
        "content-type" : "application/json",
        }

    await Service.usage(headers).then( async (response) => {
      let newData = [ ...this.state.data ];
      this.setState({
        data : [
          ...newData,
          [ response.data.Timestamp , response.data.cpuUsagePercentage ]
        ]
      });
      console.log(this.state.data);
      }).catch(() => {
          console.log("Could not fetch usage");
      });
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
      <div className="cpu-monitor-line">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={this.state.data}
          options={options}
        />
      </div>
    );
  }
}

export default cpuUsageLineChart;
