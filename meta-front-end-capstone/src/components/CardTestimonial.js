
import star from '../assets/icons_assets/star-svgrepo-com.svg'

function CardTestimonial(props) {

    return (
      <div className='card-testimonial'>
          <img src={props.card.img} alt={props.card.description} />
        <div className='card-body'>
          <h1 className='card-title'>{props.card.name}</h1>
          <p className='card-description'>
            "{props.card.description}"
          </p>
          <span className='card-stars'>
            {Array.from({ length: props.card.stars }, (_, i) => i).map((i) => (
              <img className="star" src={star} alt="me" key={`rating-img-${i}`} />
            ))}
          </span>
        </div>

      </div>
    );
  }

export default CardTestimonial;
