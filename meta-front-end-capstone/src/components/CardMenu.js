
import delivery from '../assets/icons_assets/delivery.jpg'

function CardMenu(props) {

    return (
      <div className='card-menu'>

        <img src={props.card.img} alt={props.card.description} />

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

export default CardMenu;
