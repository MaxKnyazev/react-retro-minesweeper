import React from 'react';
import './Timer.css';

class Timer extends React.Component {
  render () {
    const {timer} = this.props; 
    return (
      <div className='timer'>
        {(timer >= 0) && (timer <= 9) && `000${timer}`}
        {(timer >= 10) && (timer <= 99) && `00${timer}`}
        {(timer >= 100) && (timer <= 999) && `0${timer}`}
        {(timer >= 1000) && (timer <= 9999) && `${timer}`}
        {(timer >= 9999) && `9999`}
      </div>
    );
  }
}

export default Timer;