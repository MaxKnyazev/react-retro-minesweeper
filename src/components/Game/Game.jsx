import React from 'react';
import GameField from '../GameField';
import GameControl from '../GameControl';
import GameInfo from '../GameInfo';
import './Game.css';
import data from '../../data/data';
import {
  createGameField, 
  fillGameFieldWithMines, 
  renderEmptyElement, 
  checkMinesAroundElement,
  isItVictory,
  gameOverDefeat,
  checkMarkedElements,
} from '../../data/utils';

class Game extends React.Component {
  state = {
    isGameStart : false,
    isGameOver : false,
    itIsVictory: false,
    itIsDefeat: false,
    arrGameField : [[]],
    countMines : 0,
  }

  width = data.w
  height = data.h
  quantityMines = data.m

  componentDidMount () {     
    this.setState({
      ...this.state,
      arrGameField : createGameField(this.height, this.width),
      countMines : this.quantityMines
    })
  }

  componentDidUpdate () {
    if (this.state.isGameOver) {
      console.log('GameOver (componentDidUpdate)');
    }

    if ((isItVictory(this.state.arrGameField, this.height, this.width))&&(!this.state.isGameOver)) {
      console.log('it is victory');
      
      this.setState({
        itIsVictory : true,
        isGameOver : true,
      })
    }
  }

  leftClickHandler = (e) => {
    let clickX = +e.target.id.split(':')[0];
    let clickY = +e.target.id.split(':')[1];
    let minesAround = checkMinesAroundElement(this.state.arrGameField, clickX, clickY, this.height, this.width);
    //глубокая копия массива
    let field = JSON.parse(JSON.stringify(this.state.arrGameField));
    //1й клик
    if (!this.state.isGameStart) {
      field = fillGameFieldWithMines(field, this.height, this.width, this.quantityMines, clickX, clickY);
      field = renderEmptyElement(field, this.height, this.width, clickX, clickY);

      this.setState(prevState => {
        return {
          ...prevState,
          isGameStart : true,
          arrGameField : field,
        }
      })
    } else if (!e.target.classList.contains('field__element--marked')) {
      if (this.state.arrGameField[clickX][clickY] === 9) {
        console.log('Game over');
        console.log(this.state);
        gameOverDefeat(field, this.height, this.width);

        this.setState({
            isGameOver : true,
            itIsDefeat : true,
            arrGameField : field,
        })

      } else if (minesAround === 0) {
        field = renderEmptyElement(field, this.height, this.width, clickX, clickY);

        this.setState(
          {
            countMines : this.quantityMines - checkMarkedElements(field, this.width, this.height),
            arrGameField : field,
          }
        )
      } else {
        field = JSON.parse(JSON.stringify(this.state.arrGameField));
        field[clickX][clickY] = minesAround;

        this.setState(prevState => {
          return {
            ...prevState,
            arrGameField : field,
          }
        })
      }
    }
    console.log(e.target.id);
    console.log('arrGameField');
    console.log(this.state.arrGameField);
    console.log(`countMines = ${this.state.countMines}`)
  }

  rightClickHandler = (e) => {
    e.preventDefault();
    if ((this.state.isGameStart)&&(!this.state.isGameOver)) {
      let field = JSON.parse(JSON.stringify(this.state.arrGameField));
      let clickX = +e.target.id.split(':')[0];
      let clickY = +e.target.id.split(':')[1];
  
      if ((field[clickX][clickY] === -1)||(field[clickX][clickY] >= 9)) {
        if (field[clickX][clickY] < 49) {
          field[clickX][clickY] += 50;  
          this.setState((prevState) => ({
            countMines : prevState.countMines - 1,
            arrGameField : field,
          }))
        } else {
          field[clickX][clickY] -= 50;
          this.setState((prevState) => ({
            countMines : prevState.countMines + 1,
            arrGameField : field,
          }))
        }
        e.target.classList.toggle('field__element--marked');
        console.log('правый клик');
      }
    }
  }

  render () {
    console.log('arrGameField');
    console.log(this.state.arrGameField);
    return (
      <main className = 'main'>
        <GameInfo 
          count={this.state.countMines}
        />

        <GameField 
          leftClickHandler={this.leftClickHandler} 
          options={this.state}
          rightClickHandler={this.rightClickHandler}
        />

        <GameControl
          itIsVictory={this.state.itIsVictory}
          itIsDefeat={this.state.itIsDefeat}
        />
      </main>
    )
  }
}

export default Game;