import React from 'react';
import './Settings.css';
import {Link} from 'react-router-dom';
import data from '../../data/data';

class Settings extends React.Component {
  render () {

    console.log('data  --- Settings --- 1');
    console.log(data);
    data.w = 20;
    data.h = 20;
    console.log('data  --- Settings --- 2');
    console.log(data);

    return (
      <section>
        <h1>Settings</h1>

        <Link to='/game'>Game</Link>
        {/* TODO: Ограничить ввод в инпуты через onChange */}
        <br />
        <label>
          width: <input id='w' type='number' min='4' max='40' step='1'></input>
        </label>

        <br />
        <label>
          height: <input id='w' type='number' min='4' max='40' step='1'></input>
        </label>

        <br />
        <label>
          bombs: <input id='w' type='number' min='4' max='40' step='1'></input>
        </label>
        
      </section>
    )
  }
}

export default Settings;