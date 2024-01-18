import  { useState, useReducer } from 'react'
import { useNavigate } from "react-router-dom";

import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
[...initialAvailableTimes, ...fetchAPI(new Date())];

function BookingPage() {
  const navigate = useNavigate();

  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmed-booking");
  }; 

  return (
    <main id='booking'>
      <div className="main-booking">
        <div className='bar-title'>
          <h1 className='section-title'>Booking</h1>
        </div>
        <div className='main-booking-form'>
          <BookingForm 
            availableTimes={availableTimes} 
            dispatchOnDateChange={dispatchOnDateChange} 
            submitData={submitData}  
          />
        </div>
      </div>
    </main>
  );
}

export default BookingPage;
