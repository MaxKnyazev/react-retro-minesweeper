import React from 'react';
import './GameControl.css';
import { Redirect } from 'react-router-dom';

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
    const {itIsVictory, itIsDefeat, restartHandler} = this.props;
    return (
      <section className='game__control'>
        <button
          onClick={this.buttonSettingsHandler}
          className='button__control'  
        >Back to settings</button>
        
        {this.state.redirect ? <Redirect to='/' /> : null}

        {itIsVictory ? <div className='game__overInfo'>Victory!</div> : null}
        {itIsDefeat ? <div className='game__overInfo game__overInfo--defeat'>Defeat</div> : null}

        <button
          onClick={restartHandler}
          className='button__control' 
        >Restart</button>
      </section>
    );
  }
}

export default GameControl;