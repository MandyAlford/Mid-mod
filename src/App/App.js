import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import { getReservations } from '../util/ApiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations =>  this.setState({ reservations }))
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={ this.state.reservations }/>
        </div>
      </div>
    )
  }
}

export default App;
