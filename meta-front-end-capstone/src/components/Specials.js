import image from '../assets/icons_assets/restauranfood.jpg'

import Button from "./Button";
import Card from "./Card";

function Specials() {
    return (
      <main id='specials'>
        <div className="main-menu">
          <div className='bar-title'>
            <h1 className='section-title'>This weeks Specials!</h1>
            <Button name="Online Menu"/>
          </div>
          <div className='main-menu-cards'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    );
  }

export default Specials;
