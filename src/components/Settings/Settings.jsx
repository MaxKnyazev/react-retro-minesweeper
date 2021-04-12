import React from 'react';
import './Settings.css';
import { Link, Redirect } from 'react-router-dom';
import data from '../../data/data';

class Settings extends React.Component {
  state = {
    width: data.w,
    height: data.h,
    mines: data.m,
    maxMines: data.w * data.h - 9,
    isDataCorrect: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (this.state.mines > this.state.maxMines) {
      this.setState(() => {
        return {
          mines: this.state.maxMines,
        };
      });
    }
  }

  inputWidthHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState(() => {
        return {
          width: 40,
        };
      });
    }

    this.setState((prevState) => {
      return {
        width: +e.target.value,
        maxMines: +e.target.value * this.state.height - 9,
      };
    });

    data.w = +e.target.value;

    // if (this.state.mines > this.state.maxMines) {
    //   this.setState((prevState) => {
    //     return {
    //       mines: this.state.maxMines,
    //     }
    //   })
    // }
  };

  inputHeightHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState(() => {
        return {
          height: 40,
        };
      });
    }

    this.setState((prevState) => {
      return {
        height: +e.target.value,
        maxMines: this.state.width * +e.target.value - 9,
      };
    });

    data.h = +e.target.value;

    // if (this.state.mines > this.state.maxMines) {
    //   this.setState((prevState) => {
    //     return {
    //       mines: this.state.maxMines,
    //     }
    //   })
    // }
  };

  inputMinesHandler = (e) => {
    if (+e.target.value < 1) {
      e.target.value = 1;
      this.setState({
        mines: 1,
      });
    }

    if (+e.target.value > this.state.maxMines) {
      e.target.value = this.state.maxMines;
      this.setState({
        mines: this.state.maxMines,
      });
    }

    if (this.state.mines > this.state.maxMines) {
      this.setState({
        mines: this.state.maxMines,
      });
    }

    this.setState({
      mines: +e.target.value,
    });

    data.m = +e.target.value;
  };

  clickHandler = (e) => {
    this.setState({
      isDataCorrect: true,
    });
  };

  render() {
    // console.log('data  --- Settings --- 1');
    // console.log(data);
    // console.log('data  --- Settings --- 2');
    // console.log(data);

    return (
      <section>
        <h1>Settings</h1>

        <Link to='/game'>Start game</Link>

        <br />

        <label>
          width:
          <input
            onChange={this.inputWidthHandler}
            type='number'
            min='4'
            max='40'
            step='1'
            value={this.state.width}
          />
        </label>

        <br />
        <label>
          height:
          <input
            onChange={this.inputHeightHandler}
            type='number'
            min='4'
            max='40'
            step='1'
            value={this.state.height}
          />
        </label>

        <br />
        <label>
          mines:{' '}
          <input
            onChange={this.inputMinesHandler}
            type='number'
            min='1'
            max={this.state.maxMines}
            step='1'
            value={this.state.mines}
          />
        </label>

        <button onClick={this.clickHandler}>
          Start Game
          {this.state.isDataCorrect ? <Redirect to='/game' /> : null}
        </button>
      </section>
    );
  }
}

export default Settings;
