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
      this.setState({
        mines: this.state.maxMines,
      });
    }

    // if ((this.state.width * this.state.height - 9) !== prevState.maxMines) {
    //   this.setState({
    //     maxMines: this.state.width * this.state.height - 9,
    //   });
    // }
  }

  inputWidthHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState({
        width: 40,
      });
    }

    this.setState({
      width: +e.target.value,
      maxMines: +e.target.value * this.state.height - 9,
    });

    data.w = +e.target.value;
  };

  inputHeightHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState({
        height: 40,
      });
    }

    this.setState({
      height: +e.target.value,
      maxMines: this.state.width * +e.target.value - 9,
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

  buttonWidthUp = () => {
    this.setState((prevState) => {
      if (prevState.width < 40) {
        return {
          width: prevState.width + 1,
        }
      }
    })
  }

  buttonWidthDown = () => {
    this.setState((prevState) => {
      if (prevState.width > 4) {
        return {
          width: prevState.width - 1,
        }
      }
    })
  }

  buttonHeightUp = () => {
    this.setState((prevState) => {
      if (prevState.height < 40) {
        return {
          height: prevState.height + 1,
        }
      }
    })
  }

  buttonHeightDown = () => {
    this.setState((prevState) => {
      if (prevState.height > 4) {
        return {
          height: prevState.height - 1,
        }
      }
    })
  }

  buttonMinesUp = () => {
    this.setState((prevState) => {
      if (prevState.mines > prevState.maxMines) {
        return {
          mines: prevState.mines - 1,
        }
      }
    })
  }

  buttonMinesDown = () => {
    this.setState((prevState) => {
      if (prevState.mines > 1) {
        return {
          mines: prevState.mines - 1,
        }
      }
    })
  }

  render() {
    // console.log('data  --- Settings --- 1');
    // console.log(data);
    // console.log('data  --- Settings --- 2');
    // console.log(data);

    return (
      <section className='settings'>
        <div className='settings__title'>Settings</div>

        <div className='settings__inputs'>
          <div className='settings__label'>
            Width :&nbsp;
            <button onClick={this.buttonWidthDown} className='settings__edit'>&lt;</button>
            
            <input
              className='settings__input'
              onChange={this.inputWidthHandler}
              type='number'
              min='4'
              max='40'
              step='1'
              value={this.state.width}
            />

            <button onClick={this.buttonWidthUp} className='settings__edit'>&gt;</button>
          </div>

          <div className='settings__label'>
            Height :&nbsp;
            <button onClick={this.buttonHeightDown} className='settings__edit'>&lt;</button>

            <input
              className='settings__input'
              onChange={this.inputHeightHandler}
              type='number'
              min='4'
              max='40'
              step='1'
              value={this.state.height}
            />

            <button onClick={this.buttonHeightUp} className='settings__edit'>&gt;</button>
          </div>

          <div className='settings__label'>
            Mines :&nbsp;
            <button onClick={this.buttonMinesDown} className='settings__edit'>&lt;</button>

            <input
              className='settings__input'
              onChange={this.inputMinesHandler}
              type='number'
              min='1'
              max={this.state.maxMines}
              step='1'
              value={this.state.mines}
            />

            <button onClick={this.buttonMinesUp} className='settings__edit'>&gt;</button>
          </div>
        </div>

        {/* <Link to='/game'>Start game</Link> */}
        <button 
          onClick={this.clickHandler}
          className='settings__button'
        >
          Start Game
          {this.state.isDataCorrect ? <Redirect to='/game' /> : null}
        </button>
      </section>
    );
  }
}

export default Settings;
