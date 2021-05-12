import React from 'react';
import './Error.css';
// import data from '../../data/data';

class Error extends React.Component {
  render () {
    // console.log(`this.props`);
    // console.log(this.props);
    return (
      <div className='error'>
        <p>Error! Data is incorrect!</p>
        <p>3 &lt; width &lt; 41</p>
        <p>3 &lt; height &lt; 41</p>
        <p>0 &lt; mines &lt; width * height - 9</p>
      </div>
    );
  }
}

export default Error;