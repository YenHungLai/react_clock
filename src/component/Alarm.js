// TODO:
//  how to play audio or "alarm" the user

import React from 'react';

const style = {
  fontSize: '15px',
  fontFamily: 'Times New Roman',
  padding: '5px',
};

class Alarm extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minutes: 0,
      AMPM: 'AM',
    };
  }

  // Does not work
  play = () => {
    this.audio.play();
  }

  handleClick = () => {
    // Get value from select tag.
    const inputHour = document.getElementById('myHour').value;
    const inputMinutes = document.getElementById('myMinutes').value;
    const inputAMPM = document.getElementById('myAMPM').value;
    this.setState({ hour: inputHour });
    this.setState({ minutes: inputMinutes });
    this.setState({ AMPM: inputAMPM });
    console.log('hour: '+this.state);
  }

  render() {
    let hours = [];
    for(let i = 1; i <= 12; i++) {
      if(i < 10)
        hours.push(<option value={'0' + i}>{'0' + i}</option>);
      else
        hours.push(<option value={i}>{i}</option>);
    }

    let minutes = [];
    for(let i = 0; i <= 59; i++) {
      if(i < 10)
        minutes.push(<option value={'0' + i}>{'0' + i}</option>);
      else
        minutes.push(<option value={i}>{i}</option>);
    }

    return (
      <div>
        <span style={style}>Hour</span>
        <select id="myHour" name="Hour">
          {hours}
        </select>
        <span style={style}>Minutes</span>
        <select id="myMinutes"name="Minutes">
          {minutes}
        </select>
        <select id="myAMPM" name="AM/PM">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <br />
        <br />
        <button onClick={this.handleClick}>Set Alarm</button>
        <h1>
            You just set an alarm for {this.state.hour}:{this.state.minutes} {this.state.AMPM}
        </h1>
      </div>
    );
  }
}

export default Alarm;
