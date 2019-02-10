// TODO: why does getMonth() display month 0??

import React from 'react';

class Clock extends React.Component{
  constructor() {
    super()
    this.state = {

    }
  }

  render(){
    // console.log(this.props.time.getMilliseconds());
    // if(this.props.state.clock == true){
      // console.log("Clock component true");
      return(
        <div className="ClockStyle">
          <span>{this.props.time.getHours()}:</span>
          <span>{this.props.time.getMinutes()}:</span>
          <span>{this.props.time.getSeconds()} </span>
          <span>{this.props.time.getMonth() + 1}/</span>
          <span>{this.props.time.getDate()}/</span>
          <span>{this.props.time.getFullYear()}</span>
        </div>
      )
    // }else {
    //   return <h1> </h1>
    // }
  }
}

export default Clock
