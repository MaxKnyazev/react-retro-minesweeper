import React from 'react';
import './GameField.css';
import {
  createGameField, 
  fillGameFieldWithBombs, 
  renderEmptyElement, 
  checkBombsAroundElement,
  isItVictory,
  gameOverDefeat,
} from '../../data/utils';
import data from '../../data/data';

// const width = data.w;
// const height = data.h;
// const quantityBombs = data.b;

// console.log('data-------------------GameField 1 -');
// console.log(data);

class GameField extends React.Component {

  state = {
    isGameStart : false,
    isGameOver : false,
    arrGameField : [[]],
  }

  width = data.w
  height = data.h
  quantityBombs = data.b

  componentDidMount () {
    console.log('data-------------------GameField 2 -');
    console.log(data);
    console.log('width-------------------GameField 2 -');
    console.log(this.width);
    console.log('height-------------------GameField 2 -');
    console.log(this.height);
    console.log('quantityBombs-------------------GameField 2 -');
    console.log(this.quantityBombs);
        
    this.setState({
      ...this.state,
      arrGameField : createGameField(this.height, this.width)
    })
  }

  componentDidUpdate () {
    if (this.isGameOver) {
      console.log('GameOver (componentDidUpdate)');
    }

    if ((isItVictory(this.state.arrGameField, this.height, this.width))&&(!this.isGameOver)) {
      console.log('it is victory');
      //TODO: зафигачить game over: победа
    }
  }

  leftClickHandler = (e) => {
    let clickX = +e.target.id.split(':')[0];
    let clickY = +e.target.id.split(':')[1];
    let bombsAround = checkBombsAroundElement(this.state.arrGameField, clickX, clickY, this.height, this.width);
    //глубокая копия массива
    let field = JSON.parse(JSON.stringify(this.state.arrGameField));
    //1й клик
    if (!this.state.isGameStart) {
      field = fillGameFieldWithBombs(field, this.height, this.width, this.quantityBombs, clickX, clickY);
      field = renderEmptyElement(field, this.height, this.width, clickX, clickY);

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
        console.log(this.state);
        gameOverDefeat(field, this.height, this.width);

        this.setState(prevState => {
          return {
            ...prevState,
            isGameOver : true,
            arrGameField : field,
          }
        })
      } else if (bombsAround === 0) {
        field = renderEmptyElement(field, this.height, this.width, clickX, clickY);

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
    console.log(this.state);
    return (
      <div className = 'field' style = {{
        gridTemplateRows: `repeat(${this.height}, 1fr)`,
        gridTemplateColumns: `repeat(${this.width}, 1fr)`,
        minWidth: `${this.width * 1.5}rem`,
        minHeight: `${this.height * 1.5}rem`
      }}>
        {
          this.state.arrGameField.map((elem, i) => {
            return elem.map((elem, j) => {
              let s = `${i}:${j} `;
              let classes = `field__element`;
              if ((elem >= 0)&&(elem < 9)&&(elem !== '-')) {
                classes += ` field__element--${elem}`
              }

              if ((elem === 9)||(elem === '-')) { 
                if ((elem === 9)&&(this.state.isGameOver)) {
                  classes += ' field__element--mine'
                }

                elem = '' 
              }

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