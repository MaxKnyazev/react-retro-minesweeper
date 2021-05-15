import React from 'react';
import './GameInfo.css';
import MineCounter from '../MineCounter';
// import data from '../../data/data';

class GameInfo extends React.Component {
  render () {
    return (
      <section className='game__info'>
        <MineCounter count={this.props.count}/>
      </section>
    );
  }
}

export default GameInfo;