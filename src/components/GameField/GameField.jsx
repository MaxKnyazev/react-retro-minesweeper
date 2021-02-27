import React from 'react';
import './GameField.css';
import {createGameField, fillGameFieldWithBombs, renderEmptyElement} from '../../data/utils';

const width = 6;
const height = 6;
const quantityBombs = 10;

class GameField extends React.Component {
  state = {
    isGameStart : false,
    arrGameField : [[]],
  }

  componentDidMount () {
    this.setState({
      ...this.state,
      arrGameField : createGameField(width, height)
    })
  }

  leftClickHandler = (e) => {
    let clickX = +e.target.id.split(':')[0];
    let clickY = +e.target.id.split(':')[1];
    //глубокая копия массива
    let field = JSON.parse(JSON.stringify(this.state.arrGameField));
    //1й клик
    if (!this.state.isGameStart) {
      field = fillGameFieldWithBombs(field, width, height, quantityBombs, clickX, clickY);
      field = renderEmptyElement(field, width, height, clickX, clickY);

      this.setState({
        ...this.state,
        arrGameField : field,
        isGameStart: true
      })
    }
    console.log(e.target.id);
  }

  render () {
    return (
      <div className = 'field' style = {{
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${height}, 1fr)`,
        width: `${width * 2}vw`,
        height: `${height * 2}vw`
      }}>
        {
          this.state.arrGameField.map((elem, i) => {
            return elem.map((elem, j) => {
              let s = `${i}:${j} `;
              return (
                <span onClick = {this.leftClickHandler} key = {s} id = {s} className = 'field__element'>{elem}</span>
              )
            })
          })
          // this.state.arrGameField
        }
      </div>
    )
  }
}

export default GameField;