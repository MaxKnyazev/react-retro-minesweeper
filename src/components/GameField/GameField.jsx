import React from 'react';
import './GameField.css';

let gameField = [
  [9, 1, 0, 1, 9],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [9, 1, 0, 1, 9]
];
// let width = 5;
// let height = 5;

class GameField extends React.Component {
  state = {
    arrGameField : [[]],
  }

  componentDidMount () {
    this.setState({
      ...this.state,
      arrGameField : gameField
    })
  }

  render () {
    return (
      <div className = 'field'>
        {
          this.state.arrGameField.map((elem, i) => {
            return elem.map((elem, j) => {
              let s = `${i}:${j} `;
              return <span id = {s} className = 'field__element'>{s}</span>
            })
          })
          // this.state.arrGameField
        }
      </div>
    )
  }
}

export default GameField;