import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import data from '../../data/data';

class Settings extends React.Component {
  state = {
    width: data.w,
    height: data.h,
    bombs: data.b,
    maxBombs: (data.w * data.h) - 9,   
  }
  
  inputWidthHandler = (e) => {
    if (e.target.value < 4) {
      e.target.value = 4;
      this.setState({
        width: 4
      })
    }

    if (e.target.value > 40) {
      e.target.value = 40;
      this.setState({
        width: 40
      })
    }

    data.w = +e.target.value;
    
    this.setState({
      width: e.target.value,
      maxBombs: (data.w * data.h) - 9,
    })

    if (this.state.bombs > this.state.maxBombs) {
      this.setState({
        bombs: this.state.maxBombs,
      })
    }
  }

  inputHeightHandler = (e) => {
    if (e.target.value < 4) {
      e.target.value = 4;
      this.setState({
        height: 4
      })
    }

    if (e.target.value > 40) {
      e.target.value = 40;
      this.setState({
        height: 40
      })
    }

    data.h = +e.target.value;

    this.setState({
      height: e.target.value,
      maxBombs: (data.w * data.h) - 9,
    })

    if (this.state.bombs > this.state.maxBombs) {
      this.setState({
        bombs: this.state.maxBombs,
      })
    }
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

    data.b = +e.target.value;

    if (this.state.bombs > this.state.maxBombs) {
      this.setState({
        bombs: this.state.maxBombs,
      })
    }

    this.setState({
      bombs: e.target.value,
    })
  }

  render () {

    console.log('data  --- Settings --- 1');
    console.log(data);
    console.log('data  --- Settings --- 2');
    console.log(data);

    return (
      <section>
        <h1>Settings</h1>

        <Link to='/game'>Game</Link>
        {/* TODO: Ограничить ввод в инпуты через onChange */}
        <br />
        <label>
          width: <input onChange={this.inputWidthHandler} type='number' min='4' max='40' step='1' value={this.state.width}></input>
        </label>

        <br />
        <label>
          height: <input onChange={this.inputHeightHandler} type='number' min='4' max='40' step='1' value={this.state.height}></input>
        </label>

        <br />
        <label>
          bombs: <input onChange={this.inputBombsHandler} type='number' min='1' max={this.state.maxBombs} step='1' value={this.state.bombs}></input>
        </label>
        
      </section>
    )
  }
}

export default Settings;