import React from 'react';
import './GameInfo.css';
import MineCounter from '../MineCounter';
import Timer from '../Timer';
import data from '../../data/data';

class GameInfo extends React.Component {
  render () {
    const {timer, count} = this.props;

    return (
      <section 
        className='game__info'
        style={{
          width: `${data.w * 1.5}rem`,
          minWidth: `20vw`
        }}
      >
        <Timer timer={timer}/>

        <MineCounter count={count}/>
      </section>
    );
  }
}

export default GameInfo;