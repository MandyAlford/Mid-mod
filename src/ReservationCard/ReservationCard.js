import React, { Component } from 'react';
import './ReservationCard.css';

const ReservationCard = (props) => {
  return(
    <div className='reservation-card'>
    <h1 id='card-name'>{props.name}</h1>
     <h2 className='card-details'>{props.date}</h2>
     <h2 className='card-details'>{props.time} pm</h2>
     <h2 className='card-details'>Number of Guests: {props.number}</h2>
     <button className='cancel-button'>Cancel </button>
    </div>
  )
}

export default ReservationCard;
