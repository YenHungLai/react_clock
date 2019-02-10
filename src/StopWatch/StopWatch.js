// TODO:
//  if you click start too many times, it speeds up

import React from 'react';

class StopWatch extends React.Component {
  constructor() {
    super()
    this.state = {
      second: 0,
      milliseconds: 0
    }
  }

  handleClickStart = () => {
    // call every second
    this.id = setInterval(this.incrementSecond, 1000)
    // call every millisecond
    this.id_2 = setInterval(this.incrementMillisecond, 1)
    console.log('id' + this.id);
    console.log('id_2' + this.id_2);
  }

  handleClickStop = () => {
    console.log('in stop id' + this.id);
    console.log('in stop id_2' + this.id_2);
    clearInterval(this.id)
    clearInterval(this.id_2)
  }

  handleClickReset = () => {
    this.setState({
      second: 0,
      milliseconds: 0
    })
  }

  incrementSecond = () => {
    this.setState(prevState => {
      return({
        second: prevState.second+1
      })
    })
    console.log(this.state);
  }

  incrementMillisecond = () => {
    this.setState({
      milliseconds: new Date().getMilliseconds()
    })
    console.log(this.state);
  }

  render() {
    // if(this.props.state.stopWatch == true){
      return(
        <div>
          <div>
            <span>{this.state.second}: </span>
            <span>{this.state.milliseconds}</span>
          </div>
          <span><button onClick={this.handleClickStart}>Start</button></span>
          <span><button onClick={this.handleClickStop}>Stop</button></span>
          <span><button onClick={this.handleClickReset}>Reset</button></span>
        </div>
      )
    // } else {
    //   return <h1> </h1>
    // }
  }
}

export default StopWatch
