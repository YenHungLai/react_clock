// TODO: add alarm logic, alarm audio

import React, { Component } from 'react';
import './App.css';
import Clock from "./component/Clock"
import StopWatch from "./component/StopWatch"
import Alarm from "./component/Alarm"
import IconTabs from './uiComponent/tabs'

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
        <IconTabs
          clockTab={this.handleClick_C}
          stopwatchTab={this.handleClick_S}
          alarmTab={this.handleClick_A}
        />

        {this.state.clock? clockComponent : null}
        {this.state.stopWatch? stopWatchComponent : null}
        {this.state.alarm? alarmComponent : null}
      </div>
    )
  }
}

export default App;
