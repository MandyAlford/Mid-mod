import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className='user-form'>
        <input id='test-input' className='form-input' type='text' placeholder='Name' name='name' required/>
        <input className='form-input' type='text' placeholder='Date (mm/dd)' name='date' required/>
        <input className='form-input' type='text' placeholder='Time' name='time' required/>
        <input className='form-input' type='text' placeholder='Number of Guests' name='number' required/>
        <button className='submit-button' type='button'>Make Resservation</button>
      </form>
    )
  }
}

export default Form;
