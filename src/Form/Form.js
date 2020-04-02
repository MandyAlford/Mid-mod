import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
      id: ''
    }
  }

  handleChange = (event) => {
    if(event.target.name==='number') {
      this.setState({ [event.target.name]: parseInt(event.target.value) })
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
  }

  submitReservation = () => {
    let currentId= Date.now()
    this.setState({id: currentId});
    let newState = this.state
    newState.id = currentId
    this.props.addReservation(newState);
  }

  render() {
    return (
      <form className='user-form'>
        <input id='test-input' className='form-input' type='text'value={this.state.name} onChange={this.handleChange} placeholder='Name' name='name' required/>
        <input className='form-input' type='text' placeholder='Date (mm/dd)' value={this.state.date} onChange={this.handleChange} name='date' required/>
        <input className='form-input' type='text' placeholder='Time' value={this.state.time} onChange={this.handleChange} name='time' required/>
        <input className='form-input' type='number' placeholder='Number of Guests' value={this.state.number} onChange={this.handleChange} name='number' required/>
        <button className='submit-button' type='button' onClick={this.submitReservation}>Make Resservation</button>
      </form>
    )
  }
}

export default Form;
