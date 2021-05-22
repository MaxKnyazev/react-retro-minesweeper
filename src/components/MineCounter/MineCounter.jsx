import React from 'react';
import './MineCounter.css';

class MineCounter extends React.Component {
  render () {
    const {count} = this.props;

    return (
      <div className='mine__counter'>
        {count}
      </div>
    );
  }
}

export default MineCounter;