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
      <HomePage />
      <Specials />
      <CustomersSay />
      <Chicago />
      <BookingPage />
      <Footer />
    </div>
  );
}

export default App;
