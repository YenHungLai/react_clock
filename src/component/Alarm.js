// TODO:
//    Add stop alarm button. (Using tab switch to stop alram at the moment...)

import React from 'react';
import MyButton from '../uiComponent/button'

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
        // Alarm audio.
        this.audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    }

    setAlarm = () => {
        // Fire checkTime() every second to compare current time with alarm time.
        this.id = setInterval(this.checkTime, 1000);
        // Get value from select tag, and set alarm time.
        const inputHour = document.getElementById('myHour').value;
        const inputMinutes = document.getElementById('myMinutes').value;
        const inputAMPM = document.getElementById('myAMPM').value;
        this.setState({ hour: inputHour });
        this.setState({ minutes: inputMinutes });
        this.setState({ AMPM: inputAMPM });
        // Show result
        document.querySelector('#result').style.display = 'block';
    }

    checkTime = () => {
        // Current time.
        let currentHour = new Date().getHours();
        let currenMinutes = new Date().getMinutes();

        // AM
        if(currentHour < 10)
            currentHour = '0' + currentHour;
        // PM, only reformat currentHour when user enters 'PM'
        if(this.state.AMPM === 'PM' && currentHour > 12) {
            currentHour = currentHour - 12;
            currentHour = '0' + currentHour;
        }
        if(currenMinutes < 10)
            currenMinutes = '0' + currenMinutes;
        console.log(currentHour);
        console.log(currenMinutes);
        console.log(this.state);

        if(this.state.hour == currentHour && this.state.minutes == currenMinutes) {
            // Sound Alarm
            this.audio.play();
        }
    }

    componentWillUnmount() {
        // Stop audio
        clearInterval(this.id);
        this.audio.pause();
    }

    render() {
        let hours = [];
        for(let i = 1; i <= 12; i++) {
            if(i < 10)
              hours.push(<option key={i} value={'0' + i}>{'0' + i}</option>);
             else
              hours.push(<option key={i} value={i}>{i}</option>);
        }

        let minutes = [];
        for(let i = 0; i <= 59; i++) {
            if(i < 10)
                minutes.push(<option key={i} value={'0' + i}>{'0' + i}</option>);
            else
                minutes.push(<option key={i} value={i}>{i}</option>);
        }

        return (
            <div className='alarmStyle'>
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
                <MyButton action={this.setAlarm} name='Set Alarm' />

                <h1 id='result' style={{display: 'none'}}>
                    You just set an alarm for {this.state.hour}:{this.state.minutes} {this.state.AMPM}
                </h1>
            </div>
        );
    }
}

export default Alarm;
