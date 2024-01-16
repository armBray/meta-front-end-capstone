import image from '../assets/icons_assets/restauranfood.jpg'

import Button from "./Button";

function Main() {
    return (
      <main>
        <div className="main-hero">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias totam aut tenetur, laborum illum eveniet inventore reprehenderit iusto error, praesentium ipsam delectus sequi natus a itaque cum cupiditate magni sunt!</p>
          <Button name="Reserve a Table"/>
          <img src={image} alt="restauran food image" />
        </div>
        <div style={{backgroundColor: "red", height:'300px', width:'300px'}}>Box 1</div>
        <div style={{backgroundColor: "red", height:'300px', width:'300px'}}>Box 1</div>
        <div style={{backgroundColor: "red", height:'300px', width:'300px'}}>Box 1</div>
      </main>
    );
  }

export default Main;
