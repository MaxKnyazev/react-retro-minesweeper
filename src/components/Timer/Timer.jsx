import React from 'react';
import './Timer.css';
// import data from '../../data/data';

class Timer extends React.Component {
  render () {
    return (
      <div className='timer'>
        {(this.props.timer >= 0) && (this.props.timer <= 9) && `000${this.props.timer}`}
        {(this.props.timer >= 10) && (this.props.timer <= 99) && `00${this.props.timer}`}
        {(this.props.timer >= 100) && (this.props.timer <= 999) && `0${this.props.timer}`}
        {(this.props.timer >= 1000) && (this.props.timer <= 9999) && `${this.props.timer}`}
        {(this.props.timer >= 9999) && `9999`}
      </div>
    );
  }
}

export default Timer;
