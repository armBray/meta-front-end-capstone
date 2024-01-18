import {Routes, Route} from 'react-router-dom'

// import logo from './logo.svg';
import './App.scss';

import Header from './components/Main/Header';
import Footer from './components/Main/Footer';
import HomePage from './components/Sections/HomePage';
import Specials from './components/Sections/Specials';
import CustomersSay from './components/Sections/CustomersSay';
import Chicago from './components/Sections/Chicago';
import BookingPage from './components/Sections/BookingPage';
import ConfirmedBooking from './components/Sections/ConfirmedBooking';
import NotFound from './components/Others/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<>

                                  <HomePage />
                                  <Specials/>
                                  <CustomersSay/>
                                  <Chicago/>
                                  <BookingPage />
        </>
                                } />
        <Route 
            path='/confirmed-booking' 
            element={<ConfirmedBooking />} 
          />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
