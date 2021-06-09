import React from 'react';
import './Settings.css';
import { Redirect } from 'react-router-dom';
import data from '../../data/data';
import Error from '../Error';

class Settings extends React.Component {
  state = {
    width: data.w,
    height: data.h,
    mines: data.m,
    maxMines: data.w * data.h - 9,
    isDataCorrect: false,
    showError: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (this.state.mines > this.state.maxMines) {
      this.setState({
        mines: this.state.maxMines,
      });
    }

    if (
      this.state.width * this.state.height - 9 !== this.state.maxMines &&
      this.state.width * this.state.height - 9 > 0
    ) {
      this.setState({
        maxMines: this.state.width * this.state.height - 9,
      });
    }
  }

  inputWidthHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState({
        width: 40,
      });
    }

    if (+e.target.value <= 40) {
      this.setState({
        width: +e.target.value,
      });

      if (+e.target.value * this.state.height - 9 < 1) {
        this.setState({
          maxMines: 1,
        });
      }
    }
  };

  inputHeightHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState({
        height: 40,
      });
    }

    if (+e.target.value <= 40) {
      this.setState({
        height: +e.target.value,
      });

      if (+e.target.value * this.state.width - 9 < 1) {
        this.setState({
          maxMines: 1,
        });
      }
    }

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
  };

  clickHandler = () => {
    if (
      this.state.width  >= 4 && this.state.width  <= 40 &&
      this.state.height >= 4 && this.state.height <= 40 &&
      this.state.mines  >= 1 && this.state.mines  <= this.state.maxMines
    ) {
      this.setState({
        isDataCorrect: true,
      });

      data.w = this.state.width;
      data.h = this.state.height;
      data.m = this.state.mines;
    } else {
      this.setState({
        showError: true,
      });

      if (this.state.width < 4) {
        this.setState({
          width: 4,
        });
      }

      if (this.state.width > 40) {
        this.setState({
          width: 40,
        });
      }

      if (this.state.height < 4) {
        this.setState({
          height: 4,
        });
      }

      if (this.state.height > 40) {
        this.setState({
          height: 40,
        });
      }
    }
  };

  buttonWidthUp = () => {
    this.setState(() => {
      if (this.state.width < 40) {
        return {
          width: this.state.width + 1,
        };
      }
    });
  };

  buttonWidthDown = () => {
    this.setState(() => {
      if (this.state.width > 4) {
        return {
          width: this.state.width - 1,
        };
      }
    });
  };

  buttonHeightUp = () => {
    this.setState(() => {
      if (this.state.height < 40) {
        return {
          height: this.state.height + 1,
        };
      }
    });
  };

  buttonHeightDown = () => {
    this.setState(() => {
      if (this.state.height > 4) {
        return {
          height: this.state.height - 1,
        };
      }
    });
  };

  buttonMinesUp = () => {
    this.setState(() => {
      if (this.state.mines < this.state.maxMines) {
        return {
          mines: this.state.mines + 1,
        };
      }
    });
  };

  buttonMinesDown = () => {
    this.setState(() => {
      if (this.state.mines > 1) {
        return {
          mines: this.state.mines - 1,
        };
      }
    });
  };

  render() {
    return (
      <section className='settings'>
        <div className='settings__title'>Settings</div>

        {this.state.showError ? (
          <Error />
        ) : (
          <div style={{height: '17.5vh'}}/>
        )}

        <div className='settings__inputs'>






          <div className='settings__block'>
            <div className='settings__label'>Width :</div>

            <div className='settings__edit-elems edit-elems'>
              <button
                onClick={this.buttonWidthDown}
                className={
                  this.state.width < 5
                    ? 'edit-elems__button edit-elems__button--passive'
                    : 'edit-elems__button'
                }
              >
                &lt;
              </button>
              <input
                className='edit-elems__input'
                onChange={this.inputWidthHandler}
                type='number'
                min='4'
                max='40'
                step='1'
                value={this.state.width}
              />
              <button
                onClick={this.buttonWidthUp}
                className={
                  this.state.width > 39
                    ? 'edit-elems__button edit-elems__button--passive'
                    : 'edit-elems__button'
                }
              >
                &gt;
              </button>
            </div>
          </div>







          <div className='settings__block'>
            <div className='settings__label'>Height :</div>
            <div className='settings__edit-elems edit-elems'>
              <button
                onClick={this.buttonHeightDown}
                className={
                  this.state.height < 5
                    ? 'edit-elems__button edit-elems__button--passive'
                    : 'edit-elems__button'
                }
              >
                &lt;
              </button>
              <input
                className='edit-elems__input'
                onChange={this.inputHeightHandler}
                type='number'
                min='4'
                max='40'
                step='1'
                value={this.state.height}
              />
              <button
                onClick={this.buttonHeightUp}
                className={
                  this.state.height > 39
                    ? 'edit-elems__button edit-elems__button--passive'
                    : 'edit-elems__button'
                }
              >
                &gt;
              </button>
            </div>
          </div>

          <div className='settings__block'>
            <div className='settings__label'>Mines :</div>
            <div className='settings__edit-elems edit-elems'>
              <button
                onClick={this.buttonMinesDown}
                className={
                  this.state.mines < 2
                    ? 'edit-elems__button edit-elems__button--passive'
                    : 'edit-elems__button'
                }
              >
                &lt;
              </button>
              <input
                className='edit-elems__input'
                onChange={this.inputMinesHandler}
                type='number'
                min='1'
                max={this.state.maxMines}
                step='1'
                value={this.state.mines}
              />
              <button
                onClick={this.buttonMinesUp}
                className={
                  this.state.mines > this.state.maxMines - 1
                    ? 'edit-elems__button edit-elems__button--passive'
                    : 'edit-elems__button'
                }
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        <button onClick={this.clickHandler} className='settings__button'>
          Start Game
          {this.state.isDataCorrect ? <Redirect to='/game' /> : null}
        </button>
      </section>
    );
  }
}

export default Settings;
