import React from 'react';
import MyButton from '../uiComponent/button'

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
      <div className='stopWatchStyle'>
        <div>
          <span>{this.state.seconds}:</span><span>{this.state.milliseconds}</span>
        </div>
        
        <MyButton action={this.start} name='Start' />
        <MyButton action={this.stop} name='Stop' />
        <MyButton action={this.reset} name='Reset' />
      </div>
    )
  }
}

export default StopWatch
