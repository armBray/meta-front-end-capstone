import {Routes, Route} from 'react-router-dom'

// import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/specials" element={<Specials/>}></Route>
        <Route path="/customersay" element={<CustomersSay/>}></Route>
        <Route path="/chicago" element={<Chicago/>}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
