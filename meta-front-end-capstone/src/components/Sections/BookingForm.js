import  { useState } from 'react'

function BookingForm(props) {
  
  const today = new Date().toISOString().split('T')[0]

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(props.availableTimes[1]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');


  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidNumberOfGuestsErrorMessage = 'Please enter a number between 2 and 30';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  
  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => guests !== '';
  const isOccasionValid = () => occasion !== '';

  const getIsFormValid = () => 
    isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid() 
    && isOccasionValid();

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    props.submitData({ date, time, guests, occasion, });
  }; 

    return (
      <div className='form-booking'>
        {/* <form style="display: grid; max-width: 200px; gap: 20px"> */}
        <form onSubmit={handleSubmit}>
          <fieldset> 
            <div className="Field"> 
              <label htmlFor="res-date"> 
                Choose date <sup>*</sup> 
              </label> 
              <input 
                type="date" 
                id="res-date"
                name="res-date"
                value={date} 
                onChange={(e) => { 
                  setDate(e.target.value); 
                  props.dispatchOnDateChange(e.target.value);
                }} 
                placeholder='choose a date'
                required={true}
                min={today}
              /> 

              {!isDateValid() && invalidDateErrorMessage ? 
                <p data-testid="error-message">{invalidDateErrorMessage}</p> : null}
            </div> 
            
            <div className="Field">
              <label htmlFor="res-time">
                Choose time <sup>*</sup>
              </label>
              <select 
                id="res-time"
                name="res-date"
                value={time}
                onChange={(e) => {setTime(e.target.value)}}
                required={true} 
              >
                {props.availableTimes?.map( (time) => <option key={time} value={time} data-testid="booking-time-option">{time}</option> )}
              </select>

              {!isTimeValid() && invalidTimeErrorMessage ? 
                <p data-testid="error-message">{invalidTimeErrorMessage}</p> : null}
            </div>

            <div className="Field"> 
              <label htmlFor="guests"> 
              Number of guests <sup>*</sup> 
              </label> 
              <input 
                type="number" 
                id="guests"
                name="guests"
                value={guests} 
                onChange={(e) => { 
                  setGuests(e.target.value); 
                }} 
                placeholder="max 30" 
                required={true} 
                min="2" 
                max="30" 
              /> 

              {!isNumberOfGuestsValid() && invalidNumberOfGuestsErrorMessage ? 
                <p data-testid="error-message">{invalidNumberOfGuestsErrorMessage}</p> : null}
            </div>

            <div className="Field">
              <label htmlFor="occasion">
                Occasion <sup>*</sup>
              </label>
              <select 
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required={true} 
              >
                <option value="Birthday" data-testid="booking-occasion-option" >Birthday</option>
                <option value="Anniversary" data-testid="booking-occasion-option">Anniversary</option>
              </select>

              {!isOccasionValid() && invalidOccasionErrorMessage ? 
                <p data-testid="error-message">{invalidOccasionErrorMessage}</p> : null}
            </div>
            
            <button type="submit" disabled={!getIsFormValid}> 
              Book Now! 
            </button> 
          </fieldset> 
        </form>
      </div>
    );
  }

export default BookingForm;
