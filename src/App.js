import React, { Component } from 'react';
import CpuUsage from './Components/CpuUsage';
import RamUsage from './Components/RamUsage';
import CpuUsageLineChart from './Components/CpuUsageLineChart';
import RamUsageLineChart from './Components/RamUsageLineChart';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Container>
          <Row>
            <div className="main-head">
              <h2>Your Server Stats</h2>
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
