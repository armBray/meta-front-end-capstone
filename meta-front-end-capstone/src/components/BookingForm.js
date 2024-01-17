import  { useState } from 'react'

function BookingForm(props) {
  // const today = new Date().toLocaleDateString()

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const clearForm = () => { 
    // setFirstName(""); 
    // setLastName(""); 
    // setEmail(""); 
    // setPassword({ 
    //   value: "", 
    //   isTouched: false, 
    // }); 
    // setRole("role"); 
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
  }; 

    return (
      <div className='form-booking'>
        {/* <form style="display: grid; max-width: 200px; gap: 20px"> */}
        <form onSubmit={handleSubmit}>
          <fieldset> 
            <div className="Field"> 
              <label> 
                Choose date <sup>*</sup> 
              </label> 
              <input 
                type="date" 
                id="res-date"
                value={date} 
                onChange={(e) => { 
                  setDate(e.target.value); 
                }} 
                placeholder='choose a date'
              /> 
            </div> 
            
            <div className="Field">
              <label>
                Choose time <sup>*</sup>
              </label>
              <select 
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>

            <div className="Field"> 
              <label> 
              Number of guests <sup>*</sup> 
              </label> 
              <input 
                type="number" 
                min="2" 
                max="30" 
                id="guests"
                value={guests} 
                onChange={(e) => { 
                  setGuests(e.target.value); 
                }} 
                placeholder="max 30" 
              /> 
            </div>

            <div className="Field">
              <label>
                Occasion <sup>*</sup>
              </label>
              <select 
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            
            <button type="submit"> 
            {/* <button type="submit" disabled={!getIsFormValid()}>  */}
              Make Your reservation! 
            </button> 
          </fieldset> 
        </form>
      </div>
    );
  }

export default BookingForm;
