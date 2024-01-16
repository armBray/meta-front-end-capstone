import {Link} from 'react-router-dom'

function Nav(props) {
    return (
      <nav>
        {props.name === 'header' ?
          <ul className='li-header highlight-text flex-h' onClick={props.onClick} ref={props.refProp}>
            <li><Link to="">Home</Link></li>
            <li><Link to="/customersay">About</Link></li>
            <li><Link to="/specials">Menu</Link></li>
            <li><Link to="/booking">Reservation</Link></li>
            <li><Link to="/specials">Order Online</Link></li>
            <li><a href="#login">Login</a></li>
          </ul>

          : props.name === 'dormat' ?

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservation">Reservation</a></li>
              <li><a href="#order-online">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>

          : props.name === 'contact' ?

            <ul>
              <li><a href="#address">Address</a></li>
              <li><a href="#phone-number">Phone number</a></li>
              <li><a href="#email">Email</a></li>
            </ul>

          : props.name === 'social' ?

            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#tiktok">TikTok</a></li>
            </ul>

          : <b>Please specific props in Nav component!</b>
        }
      </nav>
    );
  }

export default Nav;
