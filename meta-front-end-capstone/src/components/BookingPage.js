import  { useState, useReducer } from 'react'

import BookingForm from "./BookingForm";

function BookingPage() {

  const reducer = (state,action) => {
    let arr = state.filter(item => item !== action.value)
    // console.log(arr);
    return arr
  }

  const initializeTimes = [
    'Select time',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]

  const [availableTimes,updateTimes] = useReducer(reducer,initializeTimes)



  // const initializeTimes = () => {
  //   return availableTimes
  // }
  // const updateTimes = () => {
  //   return availableTimes
  // }

  return (
    <main id='booking'>
      <div className="main-booking">
        <div className='bar-title'>
          <h1 className='section-title'>Booking</h1>
        </div>
        <div className='main-booking-form'>
          <BookingForm state={availableTimes} update={updateTimes} />
        </div>
      </div>
    </main>
  );
}

export default BookingPage;
