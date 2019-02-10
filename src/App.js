// TODO: add alarm logic, alarm audio

import React, { Component } from 'react';
import './App.css';
import Clock from "./Clock/Clock"
import StopWatch from "./StopWatch/StopWatch"
import Alarm from "./Alarm/Alarm"

class App extends Component {
  constructor() {
    super()
    this.state = {
      // You can do this???
      time: new Date(),
      clock: false,
      stopWatch: false,
      alarm: false
    }
    // Calls newTime() every second(1000ms)
    setInterval(this.newTime, 1000);
  }

  // componentDidMount() {
  //   alert("Component mounted!!!")
  // }

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

  // Pass a new Date object to reset time.
  newTime = () => {
    this.setState({time: new Date()})
  }

  render() {
    // let time = new Date()
    //
    // // Why doesn't this work????
    // if(this.state.clock == true) {
    //   const Component = <Clock time={this.state.time} />
    //   console.log("Hello")
    // }

    // Pass state to components for Conditional rendering.
    const clockComponent = <Clock time={this.state.time} state={this.state} />
    const stopWatchComponent = <StopWatch state={this.state} />
    const alarmComponent = <Alarm state={this.state} />
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
