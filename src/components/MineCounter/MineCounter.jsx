import React from 'react';
import './MineCounter.css';
import data from '../../data/data';

class MineCounter extends React.Component {
  render () {
    console.log(`this.props`);
    console.log(this.props);
    return (
      <div className='mine__counter'>
        {this.props.count}
      </div>
    );
  }
}

export default MineCounter;
