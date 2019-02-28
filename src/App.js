import React, { Component } from 'react';
import CpuUsage from './Components/CpuUsage/CpuUsage';
import RamUsage from './Components/RamUsage/RamUsage';
import CpuUsageLineChart from './Components/CpuUsage/CpuUsageLineChart';
import RamUsageLineChart from './Components/RamUsage/RamUsageLineChart';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Container>
          <Row>
            <div className="main-head">
              <h2>Your Server Usage Stats</h2>
            </div>
          </Row>
          <Row className='gauge-wrapper'>
            <Col md={6}>
              <CpuUsage/>
            </Col>
            <Col md={6}>
              <RamUsage/>
            </Col>
          </Row>
          <Row>
            <CpuUsageLineChart/>
          </Row>
          <Row>
            <RamUsageLineChart/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
