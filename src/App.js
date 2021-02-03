import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};

    this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    console.log(event.target.id);
    console.log(event.target.dataset.foo);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('Отправленное имя: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <React.Fragment>
        <h1>Hello Minesweeper</h1>

        <button 
          id='1:2'
          onClick={this.handleClick}
        > Button with id 1:2
        </button>

        <button 
          id='10:20'
          data-foo='42'
          onClick={this.handleClick}
        > Button with id 10:20 data-foo 42
        </button>

      </React.Fragment>

    );
  }
}

export default App;
