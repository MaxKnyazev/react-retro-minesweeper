import React from 'react';
import './Settings.css';
import { Link, Redirect } from 'react-router-dom';
import data from '../../data/data';

class Settings extends React.Component {
  state = {
    width: data.w,
    height: data.h,
    bombs: data.b,
    maxBombs: (data.w * data.h) - 9,   
    isDataCorrect: false,
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(this.state)
    if (this.state.bombs > this.state.maxBombs) {
      this.setState(() => {
        return {
          bombs: this.state.maxBombs,
        }
      })
    }
  }
  
  inputWidthHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState(() => {
        return {
          width: 40
        }
      })
    }

    this.setState((prevState) => {
      return {
        width: +e.target.value,
        maxBombs: (+e.target.value * this.state.height) - 9,
      }
    })

    data.w = +e.target.value;

    // if (this.state.bombs > this.state.maxBombs) {
    //   this.setState((prevState) => {
    //     return {
    //       bombs: this.state.maxBombs,
    //     }
    //   })
    // }
  }

  inputHeightHandler = (e) => {
    if (+e.target.value > 40) {
      e.target.value = 40;
      this.setState(() => {
        return {
          height: 40
        }
      })
    }

    this.setState((prevState) => {
      return {
        height: +e.target.value,
        maxBombs: (this.state.width * +e.target.value) - 9,
      }
    })

    data.h = +e.target.value;

    // if (this.state.bombs > this.state.maxBombs) {
    //   this.setState((prevState) => {
    //     return {
    //       bombs: this.state.maxBombs,
    //     }
    //   })
    // }
  }

  inputBombsHandler = (e) => {
    if (+e.target.value < 1) {
      e.target.value = 1;
      this.setState({
        bombs: 1,
      })
    }

    if (+e.target.value > this.state.maxBombs) {
      e.target.value = this.state.maxBombs;
      this.setState({
        bombs: this.state.maxBombs,
      })
    }

    if (this.state.bombs > this.state.maxBombs) {
      this.setState({
        bombs: this.state.maxBombs,
      })
    }

    this.setState({
      bombs: +e.target.value,
    })

    data.b = +e.target.value;
  }

  clickHandler = (e) => {
    this.setState({
      isDataCorrect: true,
    })
  }

  render () {

    // console.log('data  --- Settings --- 1');
    // console.log(data);
    // console.log('data  --- Settings --- 2');
    // console.log(data);
    
    return (
      <section>
        <h1>Settings</h1>

        <Link to='/game'>Start game</Link>
        {/* TODO: Ограничить ввод в инпуты через onChange */}
        <br />
        <label>
          width: <input onChange={this.inputWidthHandler} type='number' min='4' max='40' step='1' value={this.state.width}/>
        </label>

        <br />
        <label>
          height: <input onChange={this.inputHeightHandler} type='number' min='4' max='40' step='1' value={this.state.height}/>
        </label>

        <br />
        <label>
          bombs: <input onChange={this.inputBombsHandler} type='number' min='1' max={this.state.maxBombs} step='1' value={this.state.bombs}/>
        </label>
        
        <button onClick={this.clickHandler}>
          Start Game
          {this.state.isDataCorrect ? <Redirect to="/game" /> : null}
        </button>
        
      </section>
    )
  }
}

export default Settings;
