import React from 'react';
import GameField from '../GameField';
import MineCounter from '../MineCounter';
import './Game.css';
import data from '../../data/data';

class Game extends React.Component {
  render () {
    return (
      <section className = 'field__wrapper'>
        <div >
          <MineCounter count={data.c}/>
        </div>

        <GameField />
      </section>
    )
  }
}

export default Game;