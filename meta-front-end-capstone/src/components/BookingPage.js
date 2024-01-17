

import BookingForm from "./BookingForm";

function BookingPage() {
    return (
      <main id='booking'>
        <div className="main-booking">
          <div className='bar-title'>
            <h1 className='section-title'>Booking</h1>
          </div>
          <div className='main-booking-form'>
            <BookingForm />
          </div>
        </div>
      </main>
    );
  }

export default BookingPage;
