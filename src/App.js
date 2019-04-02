// TODO: add alarm logic, alarm audio

import React, { Component } from 'react';
import './App.css';
import Clock from "./component/Clock"
import StopWatch from "./component/StopWatch"
import Alarm from "./component/Alarm"

class App extends Component {
  constructor() {
    super()
    this.state = {
      clock: false,
      stopWatch: false,
      alarm: false
    }
  }

  // Event handlers
  handleClick_C = () => {
    this.setState(
      {clock: true, stopWatch: false, alarm: false}
    )
  }

  handleClick_S = () => {
    this.setState(
      {stopWatch: true, clock: false, alarm: false}
    )
  }

  handleClick_A = () => {
    this.setState(
      {alarm: true, stopWatch: false, clock: false}
    )
  }

  render() {
    // Pass state to components for Conditional rendering.
    const clockComponent = <Clock />
    const stopWatchComponent = <StopWatch />
    const alarmComponent = <Alarm />
    // console.log(this.state);
    return (
      <div className="S1">
        <div className="Title">
          <h2>
            This is a Clock App
          </h2>
          <nav>
            <button onClick={this.handleClick_C}>Clock</button>
            <button onClick={this.handleClick_S}>Stop Watch</button>
            <button onClick={this.handleClick_A}>Alarm</button>
          </nav>
        </div>
        {this.state.clock? clockComponent : null}
        {this.state.stopWatch? stopWatchComponent : null}
        {this.state.alarm? alarmComponent : null}
      </div>
    )
  }
}

export default App;
