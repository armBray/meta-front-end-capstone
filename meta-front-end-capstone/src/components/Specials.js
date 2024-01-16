import image from '../assets/icons_assets/restauranfood.jpg'

import Button from "./Button";

function Specials() {
    return (
      <main>
        <div className="main-menu">
          <div className='bar-title'>
            <h1 className='section-title'>This weeks Specials!</h1>
            <Button name="Online Menu"/>
          </div>
          <div className='main-menu-cards'>
            
          </div>
        </div>
      </main>
    );
  }

export default Specials;
