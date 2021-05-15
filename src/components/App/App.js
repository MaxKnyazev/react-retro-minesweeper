import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Game from '../Game';
import Settings from '../Settings';

class App extends React.Component {
  // state = {};


  render() {
    return (
      <Router>
        <Switch>
          <Route path='/game'>
            <Game />
          </Route>

          <Route path='/'>
            <Settings />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;

  // handleClick(event) {
  //   console.log(event.target.id);
  //   console.log(event.target.dataset.foo);
  // }

// {/* <h1>Hello Minesweeper</h1>

// <button 
//   id='1:2'
//   onClick={this.handleClick}
// > Button with id 1:2
// </button>

// <button 
//   id='10:20'
//   data-foo='42'
//   onClick={this.handleClick}
// > Button with id 10:20 data-foo 42
// </button> */}