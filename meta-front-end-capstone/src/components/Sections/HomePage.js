import  { useRef,useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
import image from '../../assets/card/restaurant/restauranfood.jpg'

// import Button from "./Button";

function HomePage() {
  // const buttonRef = useRef(null)

  // useEffect(() => {
  //   const handleClick = event => {
  //     window.location='#booking'
  //   };

  //   const buttonEl = buttonRef.current;

  //   buttonEl.addEventListener('click', handleClick)

  //   return () => {
  //     buttonEl.removeEventListener('click', handleClick);
  //   };
  // },[])

    return (
      <main id='home'>
        <div className="main-hero">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          {/* <Button refProp={buttonRef} name="Reserve a Table"/> */}
          <HashLink to='/#booking'><button>Reserve a table</button></HashLink>
          <img src={image} alt="restauran food image" />
        </div>
      </main>
    );
  }

export default HomePage;
