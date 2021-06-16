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
    test: data.h,
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
    let _val = e.target.value;
    _val = _val.split('').filter(elem => (elem.charCodeAt() >= 48)&&(elem.charCodeAt() <= 57)).join('');
    console.log(_val);

    if (_val === '') {
      this.setState({
        width: 4,
      })
    }

    if ((+_val >= 0)&&(+_val <= 40)) {
      if (_val.length === 1) {
        if (_val === '0') {
          this.setState({
            width: 4,
          })
        } else {
          this.setState({
            width: +_val,
          })
        }
      }

      if (_val.length === 2) {
        if (+_val === 0) {
          this.setState({
            width: 4,
          })
        } else {
          this.setState({
            width: +_val,
          })
        }
      }
    }

    if (+_val > 40) {
      this.setState({
        width: 40,
      })
    }
  }

  inputHeightHandler = (e) => {
    let _val = e.target.value;
    _val = _val.split('').filter(elem => (elem.charCodeAt() >= 48)&&(elem.charCodeAt() <= 57)).join('');
    console.log(_val);

    if (_val === '') {
      this.setState({
        height: 4,
      })
    }

    if ((+_val >= 0)&&(+_val <= 40)) {
      if (_val.length === 1) {
        if (_val === '0') {
          this.setState({
            height: 4,
          })
        } else {
          this.setState({
            height: +_val,
          })
        }
      }

      if (_val.length === 2) {
        if (+_val === 0) {
          this.setState({
            height: 4,
          })
        } else {
          this.setState({
            height: +_val,
          })
        }
      }
    }

    if (+_val > 40) {
      this.setState({
        height: 40,
      })
    }
  }

  inputMinesHandler = (e) => {
    let _val = e.target.value;
    _val = _val.split('').filter(elem => (elem.charCodeAt() >= 48)&&(elem.charCodeAt() <= 57)).join('');
    console.log(_val);

    if (_val === '') {
      this.setState({
        mines: 1,
      })
    }

    if ((+_val >= 0)&&(+_val <= this.state.maxMines)) {
      if (_val.length === 1) {
        if (_val === '0') {
          this.setState({
            mines: 1,
          })
        } else {
          this.setState({
            mines: +_val,
          })
        }
      }

      if (_val.length >= 2) {
        if (+_val === 0) {
          this.setState({
            mines: 1,
          })
        } else {
          this.setState({
            mines: +_val,
          })
        }
      }
    }

    if (+_val > this.state.maxMines) {
      this.setState({
        mines: this.state.maxMines,
      })
    }

    // if (+e.target.value < 1) {
    //   e.target.value = 1;
    //   this.setState({
    //     mines: 1,
    //   });
    // }

    // if (+e.target.value > this.state.maxMines) {
    //   e.target.value = this.state.maxMines;
    //   this.setState({
    //     mines: this.state.maxMines,
    //   });
    // }

    // if (this.state.mines > this.state.maxMines) {
    //   this.setState({
    //     mines: this.state.maxMines,
    //   });
    // }

    // this.setState({
    //   mines: +e.target.value,
    // });

  }

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
  }

  buttonWidthUp = () => {
    if (this.state.width < 40) {
      this.setState({
        width: this.state.width + 1,
      })
    }
  }

  buttonWidthDown = () => {
    if (this.state.width > 4) {
      this.setState({
        width: this.state.width - 1,
      })
    }
  }

  buttonHeightUp = () => {
    if (this.state.height < 40) {
      this.setState({
        height: this.state.height + 1,
      })
    }
  }

  buttonHeightDown = () => {
    if (this.state.height > 4) {
      this.setState({
        height: this.state.height - 1,
      })
    }
  }

  buttonMinesUp = () => {
    if (this.state.mines < this.state.maxMines) {
      this.setState({
        mines: this.state.mines + 1,
      })
    }
  }

  buttonMinesDown = () => {
    if (this.state.mines > 1) {
      this.setState({
        mines: this.state.mines - 1,
      })
    }
  }

  xxx = (e) => {

    if (e.target.value.charCode >= 48 && e.target.value.charCode <= 57) {
      console.log('*********************')
    }
  }

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
                type='text'
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
                type='text'
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
                type='text'
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
