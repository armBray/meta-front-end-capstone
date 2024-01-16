import image from '../assets/icons_assets/restauranfood.jpg'

import Button from "./Button";

function HomePage() {
    return (
      <main>
        <div className="main-hero">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button name="Reserve a Table"/>
          <img src={image} alt="restauran food image" />
        </div>
      </main>
    );
  }

export default HomePage;
