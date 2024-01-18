import  { useState } from 'react'

function BookingForm(props) {
  // const today = new Date().toLocaleDateString()

  const [date, setDate] = useState('');
  const [time, setTime] = useState(props.state[1]);
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  

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
    console.log("Table Booked!",
    "\nOccasion: ", occasion,
    "\nGuests\t: ", guests,
    "\nDate\t: ", date,
    "\nTime\t: ", time)
    alert("Table Booked!",
          "\nOccasion: ", occasion,
          "\nGuests: ", guests,
          "\nDate: ", date,
          "\nTime: ", time
          ); 
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
                required
              /> 
            </div> 
            
            <div className="Field">
              <label>
                Choose time <sup>*</sup>
              </label>
              <select 
                id="res-time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value)
                  props.update({value: e.target.value})
                  }
                }
                required
              >
                {props.state?.map( (time) => <option key={time} value={time}>{time}</option> )}
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
                required
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
                required
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
