import React, { Component } from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'

class ReservationContainer extends Component {
  constructor() {
    super();
  }
  render() {
    debugger
    return(
      this.props.reservations.map(reservation => <ReservationCard key={reservation.id} name={reservation.name} date={reservation.date} number={reservation.number} time={reservation.time} id={reservation.id}/>)
    )
  }
}

export default ReservationContainer;
