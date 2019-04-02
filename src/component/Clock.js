import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
    // Refresh the time every second.
    setInterval(this.newTime, 1000);
  }

  // Pass a new Date object to reset time.
  newTime = () => {
    this.setState({time: new Date()})
  }

  render() {
    // console.log(this.props.time.getMilliseconds());
    // if(this.props.state.clock == true){
    // console.log("Clock component true");
    return (
      <div className="ClockStyle">
        <span>{this.state.time.getHours()}:</span>
        <span>{this.state.time.getMinutes()}:</span>
        <span>{this.state.time.getSeconds()} </span>
        <span>{this.state.time.getMonth() + 1}/</span>
        <span>{this.state.time.getDate()}/</span>
        <span>{this.state.time.getFullYear()}</span>
      </div>
    );
  }
}

export default Clock;
