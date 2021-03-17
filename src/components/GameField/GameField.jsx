import React from 'react';
import './GameField.css';
import {
  createGameField, 
  fillGameFieldWithBombs, 
  renderEmptyElement, 
  checkBombsAroundElement,
  isItVictory,
} from '../../data/utils';

const width = 30;
const height = 16;
const quantityBombs = 92;

class GameField extends React.Component {
  state = {
    isGameStart : false,
    arrGameField : [[]],
  }

  componentDidMount () {
    this.setState({
      ...this.state,
      arrGameField : createGameField(height, width)
    })
  }

  componentDidUpdate () {
    if (isItVictory(this.state.arrGameField, height, width)) {
      console.log('it is victory');
      //TODO: зафигачить game over: победа
    }
  }

  leftClickHandler = (e) => {
    let clickX = +e.target.id.split(':')[0];
    let clickY = +e.target.id.split(':')[1];
    let bombsAround = checkBombsAroundElement(this.state.arrGameField, clickX, clickY, height, width);
    //глубокая копия массива
    let field = JSON.parse(JSON.stringify(this.state.arrGameField));
    //1й клик
    if (!this.state.isGameStart) {
      field = fillGameFieldWithBombs(field, height, width, quantityBombs, clickX, clickY);
      field = renderEmptyElement(field, height, width, clickX, clickY);

      this.setState(prevState => {
        return {
          ...prevState,
          isGameStart: true,
          arrGameField : field,
        }
      })
    } else if (!e.target.classList.contains('field__element--marked')) {
      if (this.state.arrGameField[clickX][clickY] === 9) {
        console.log('Game over');
        //TODO: зафигачить game over: проигрышь
      } else if (bombsAround === 0) {
        field = renderEmptyElement(field, height, width, clickX, clickY);

        this.setState(prevState => {
          return {
            ...prevState,
            arrGameField : field,
          }
        })
      } else {
        field = JSON.parse(JSON.stringify(this.state.arrGameField));
        field[clickX][clickY] = bombsAround;

        this.setState(prevState => {
          return {
            ...prevState,
            arrGameField : field,
          }
        })
      }
    }
    console.log(e.target.id);
  }

  rightClickHandler = (e) => {
    e.preventDefault();
    let clickX = +e.target.id.split(':')[0];
    let clickY = +e.target.id.split(':')[1];

    if ((this.state.arrGameField[clickX][clickY] === '-')||(this.state.arrGameField[clickX][clickY] === 9)) {
      e.target.classList.toggle('field__element--marked');
      console.log('правый клик');
    }
  }

  render () {
    return (
      <div className = 'field' style = {{
        gridTemplateRows: `repeat(${height}, 1fr)`,
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        minWidth: `${width * 1.5}rem`,
        minHeight: `${height * 1.5}rem`
      }}>
        {
          this.state.arrGameField.map((elem, i) => {
            return elem.map((elem, j) => {
              let s = `${i}:${j} `;
              let classes = `field__element`;
              if ((elem >= 0)&&(elem < 9)&&(elem !== '-')) {
                classes += ` field__element--${elem}`
              }

              if ((elem === 9)||(elem === '-')) { elem = '' }
              return (
                <span 
                  onClick = {this.leftClickHandler} 
                  onContextMenu = {this.rightClickHandler}
                  key = {s} 
                  id = {s} 
                  className = {classes}
                >
                  {/* <span> */}
                    {elem}
                  {/* </span> */}
                </span>
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