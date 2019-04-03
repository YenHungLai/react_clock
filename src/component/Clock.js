import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
      // Refresh the time every second.
      setInterval(this.newTime, 1000);
  }

  // Pass a new Date object to reset time.
  newTime = () => {
    this.setState({time: new Date()})
  }

  render() {
    let minutes = this.state.time.getMinutes();
    // Append 0 if value less than 10
    if(minutes < 10)
      minutes = '0' + minutes;

    return (
      <div className="clockStyle">
        <span>{this.state.time.getHours()}:</span>
        <span>{minutes}:</span>
        <span>{this.state.time.getSeconds()} </span>
        <span>{this.state.time.getMonth() + 1}/</span>
        <span>{this.state.time.getDate()}/</span>
        <span>{this.state.time.getFullYear()}</span>
      </div>
    );
  }
}

export default Clock;
