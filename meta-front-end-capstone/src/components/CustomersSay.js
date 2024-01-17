import houcine from '../assets/card/testimonials/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg'
import jake from '../assets/card/testimonials/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'
import joseph from '../assets/card/testimonials/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import michael from '../assets/card/testimonials/michael-dam-mEZ3PoFGs_k-unsplash.jpg'

import CardTestimonial from './CardTestimonial'

function CustomersSay() {
  const cards = [{
    img: houcine,
    name: 'Houcine',
    stars: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime tempore voluptas nesciunt laudantium nemo dolorem, commodi sapiente hic aperiam dolore impedit veritatis neque doloremque excepturi quibusdam veniam libero minima!'
  },
  {
    img: jake,
    name: 'Jake',
    stars: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime tempore voluptas nesciunt laudantium nemo dolorem, commodi sapiente hic aperiam dolore impedit veritatis neque doloremque excepturi quibusdam veniam libero minima!'
  },
  {
    img: joseph,
    name: 'Joseph',
    stars: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime tempore voluptas nesciunt laudantium nemo dolorem, commodi sapiente hic aperiam dolore impedit veritatis neque doloremque excepturi quibusdam veniam libero minima!'
  },
  {
    img: michael,
    name: 'Michael',
    stars: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime tempore voluptas nesciunt laudantium nemo dolorem, commodi sapiente hic aperiam dolore impedit veritatis neque doloremque excepturi quibusdam veniam libero minima!'
  }]

    return (
      <main id='customersay'>
        <div className="main-customers">
          <div className='bar-title'>
            <h1 className='section-title'>Testimonials</h1>
          </div>
          <div className='main-customers-cards'>
            {
              cards.map(
                (card) => (
                  <CardTestimonial key= {card.img} card={card}/>
                )
              )
            }
          </div>
        </div>
      </main>
    );
  }

export default CustomersSay;
