import image from '../assets/icons_assets/restauranfood.jpg'
import delivery from '../assets/icons_assets/images/delivery.jpg'
import bruschetta from '../assets/icons_assets/bruchetta.svg'


import Button from "./Button";
import Card from "./Card";

function Specials() {

  const cards = [{
    img: bruschetta,
    h1: 'Greek salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: bruschetta,
    h1: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
  },
  {
    img: bruschetta,
    h1: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
  {
    img: bruschetta,
    h1: 'Greek salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  }]

    return (
      <main id='specials'>
        <div className="main-menu">
          <div className='bar-title'>
            <h1 className='section-title'>This weeks Specials!</h1>
            <Button name="Online Menu"/>
          </div>
          <div className='main-menu-cards'>
            {cards.map( (card) => (
              <Card card={card}/>
            ) )}
          </div>
        </div>
      </main>
    );
  }

export default Specials;
