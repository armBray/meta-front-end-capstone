

// import bruschetta from '../assets/card/dishes/bruchetta.svg'
import bruschetta_small from '../assets/card/dishes/bruschetta_small.jpg'
import fish_and_chips_small from '../assets/card/dishes/fish_and_chips_small.jpg'
import greek_salad_small from '../assets/card/dishes/greek_salad_small.jpg'
import lemon_dessert from '../assets/card/dishes/lemon dessert.jpg'
import pasta_small from '../assets/card/dishes/pasta_small.jpg'


import Button from "./Button";
import CardMenu from "./CardMenu";

function Specials() {

  const cards = [{
    img: greek_salad_small,
    h1: 'Greek salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: bruschetta_small,
    h1: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
  },
  {
    img: lemon_dessert,
    h1: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
  {
    img: fish_and_chips_small,
    h1: 'Fish and chips',
    price: '$18.99',
    description: 'Fish and chips, classic dish of the British Isles, consisting of battered and deep-fried fish, usually cod or haddock, and french fries.',
  },
  {
    img: pasta_small,
    h1: 'Pasta',
    price: '$9.99',
    description: 'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes.',
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
              <CardMenu card={card}/>
            ) )}
          </div>
        </div>
      </main>
    );
  }

export default Specials;
