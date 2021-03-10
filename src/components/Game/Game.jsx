import React from 'react';
import GameField from '../GameField';
import './Game.css'

class Game extends React.Component {
  render () {
    return (
      <section className = 'field__wrapper'>
        <GameField />
      </section>
    )
  }
}

export default Game;