import React from 'react';
import './GameField.css';
import {
  createGameField, 
  fillGameFieldWithBombs, 
  renderEmptyElement, 
  checkBombsAroundElement,
  isItVictory,
} from '../../data/utils';

const width = 10;
const height = 10;
const quantityBombs = 20;

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

  componentDidUpdate () {
    if (isItVictory(this.state.arrGameField, width, height)) {
      console.log('it is victory');
      //TODO: зафигачить game over: победа
    }
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

      this.setState(prevState => {
        return {
          ...prevState,
          isGameStart: true,
          arrGameField : field,
        }
      })
    } else {
      if (this.state.arrGameField[clickX][clickY] === 9) {
        console.log('Game over');
        //TODO: зафигачить game over: проигрышь
      } else {
        if (checkBombsAroundElement(this.state.arrGameField, clickX, clickY, width, height) === 0) {
          field = renderEmptyElement(field, width, height, clickX, clickY);

          this.setState(prevState => {
            return {
              ...prevState,
              arrGameField : field,
            }
          })
        } else {
          field = JSON.parse(JSON.stringify(this.state.arrGameField));
          field[clickX][clickY] = checkBombsAroundElement(this.state.arrGameField, clickX, clickY, width, height);

          this.setState(prevState => {
            return {
              ...prevState,
              arrGameField : field,
            }
          })
        }
      }
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