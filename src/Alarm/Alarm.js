// TODO: how to populate dropdown menu using JS
//       how to play audio or "alarm" the user

import React from 'react';

const style = {
  fontSize: "15px",
  fontFamily: "Times New Roman",
  padding: "5px"
}

class Alarm extends React.Component {
  constructor() {
    super()
    this.state = {
      hour: 0,
      minutes: 0,
      AMPM: "AM"
    }
    this.handleClick = this.handleClick.bind(this)

    // Does not work
    this.play = this.play.bind(this)
    this.audio = new Audio("C:\Users\Jacob\Desktop\project_clock\src\Alarm\DoorBell.mp3")
  }

  // Does not work
  play() {
    this.audio.play()
  }

  handleClick() {
    // Get value from select tag.
    const inputHour = document.getElementById("myHour").value
    const inputMinutes = document.getElementById("myMinutes").value
    const inputAMPM = document.getElementById("myAMPM").value
    this.setState({hour: inputHour})
    this.setState({minutes: inputMinutes})
    this.setState({AMPM: inputAMPM})
    console.log("hour: "+this.state);
  }

  render() {
    // if(this.props.state.alarm == true){
      return(
        <div>
          <span style={style}>Hour</span>
          <select id="myHour" name="Hour" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span style={style}>Minutes</span>
          <select id="myMinutes"name="Minutes">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option> 
            <option value="06">06</option>
          </select>
          <select id="myAMPM" name="AM/PM">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <br />
          <br />
          <button onClick={this.handleClick}>Set Alarm</button>
          <button onClick={this.play}>PLAY AUDIO</button>
          <h1>
            You just set an alarm for {this.state.hour}:{this.state.minutes}{this.state.AMPM}
          </h1>
          <audio controls >
            <source src="C:\Users\Jacob\Desktop\project_clock\src\Alarm\DoorBell.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )
    // }else {
    //   return(<h1> </h1>)
    // }
  }
}

export default Alarm
