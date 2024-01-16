import bruschetta from '../assets/icons_assets/bruchetta.svg'
import delivery from '../assets/icons_assets/images/delivery.jpg'

function Card(props) {
  const card = {
    img: bruschetta,
    h1: 'Greek salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  }


    return (
      <div className='card'>

        <img src={props.card.img} alt="bruschetta card" />

        <div className='card-body'>
          <div className='card-header'>
            <h1 className='card-title'>{props.card.h1}</h1>
            <span className='card-price'>{props.card.price}</span>
          </div>
          <p className='card-description'>
            {props.card.description}
          </p>
          <button className='card-button'>
            <span>Order a delivery</span>
            <img src={delivery} alt="delivery icon" />
          </button>
        </div>

      </div>
    );
  }

export default Card;
