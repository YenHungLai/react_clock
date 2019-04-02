import React from 'react';

class StopWatch extends React.Component {
  constructor() {
    super()
    this.state = {
      seconds: 0,
      milliseconds: 0
    }
    this.stopped = 1;
  }

  start = () => {
    // Prevent setInterval being called too many times.
    if(this.stopped === 1) {
      // Call every millisecond
      this.id = setInterval(() => {
        this.setState(prevState => {
          return({
            milliseconds: prevState.milliseconds + 1
          })
        });

        if(this.state.milliseconds === 1000) {
          this.setState(prevState => {
            return ({
              seconds: prevState.seconds + 1,
              milliseconds: 0
            })
          });
        }
      }, 1);
      this.stopped = 0;
    }
  }

  stop = () => {
    clearInterval(this.id);
    this.stopped = 1;
  }

  reset = () => {
    this.setState({
      seconds: 0,
      milliseconds: 0
    })
  }

  render() {
    return(
      <div>
        <div>
          <span>{this.state.seconds}:</span><span>{this.state.milliseconds}</span>
        </div>
        <span><button onClick={this.start}>Start</button></span>
        <span><button onClick={this.stop}>Stop</button></span>
        <span><button onClick={this.reset}>Reset</button></span>
      </div>
    )
  }
}

export default StopWatch
