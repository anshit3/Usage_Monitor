import React, { Component } from 'react';
import CpuUsage from './Components/CpuUsage';
import RamUsage from './Components/RamUsage';
import CpuUsageLineChart from './Components/CpuUsageLineChart';
import RamUsageLineChart from './Components/RamUsageLineChart';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="main-head">
          <h2>Your Server Stats</h2>
        </div>
        <RamUsage/>
        <CpuUsage/>
        <CpuUsageLineChart/>
        <RamUsageLineChart/>
      </div>
    );
  }
}

export default App;
