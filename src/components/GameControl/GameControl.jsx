import React from 'react';
import './GameControl.css';
import { Redirect } from 'react-router-dom';
// import data from '../../data/data';

class GameControl extends React.Component {
  state = {
    redirect : false,
  }

  buttonSettingsHandler = () => {
    this.setState({
      redirect : true,
    })
  }

  render () {
    return (
      <section className='game__control'>
        <button
          onClick={this.buttonSettingsHandler}
          className='button__control'  
        >Back to settings</button>
        {this.state.redirect ? <Redirect to='/' /> : null}

        {this.props.itIsVictory ? <div className='game__overInfo'>Victory!</div> : null}
        {this.props.itIsDefeat ? <div className='game__overInfo game__overInfo--defeat'>Defeat</div> : null}

        <button
          className='button__control' 
        >Restart</button>
      </section>
    );
  }
}

export default GameControl;