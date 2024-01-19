
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav(props) {
    return (
      <nav>
        {props.name === 'header' ?
          <ul className='li-header highlight-text flex-h' onClick={props.onClick} ref={props.refProp}>
            <li><HashLink to="/#home">Home</HashLink></li>
            {/* <li><a href="/">Home</a></li> */}
            <li><HashLink to="/#chicago">About</HashLink></li>
            {/* <li><a href="#chicago">About</a></li> */}
            <li><HashLink to="/#specials">Menu</HashLink></li>
            <li><HashLink to="/#booking">Reservation</HashLink></li>
            <li><HashLink to="/#footer">Contact</HashLink></li>
            <li><HashLink to="/#customersay">Customers</HashLink></li>
            <li><HashLink to="/#login">Login</HashLink></li>
          </ul>

          : props.name === 'dormat' ?

            <ul>
              <li><HashLink to="/#home">Home</HashLink></li>
              <li><HashLink to="/#about">About</HashLink></li>
              <li><HashLink to="/#menu">Menu</HashLink></li>
              <li><HashLink to="/#reservation">Reservation</HashLink></li>
              <li><HashLink to="/#order-online">Order Online</HashLink></li>
              <li><HashLink to="/#login">Login</HashLink></li>
            </ul>

          : props.name === 'contact' ?

            <ul>
              <li><a href="#address">Address</a></li>
              <li><a href="#phone-number">Phone number</a></li>
              <li><a href="#email">Email</a></li>
            </ul>

          : props.name === 'social' ?

            <ul>
              <li><Link to="https://www.facebook.com/" target="_blank">Facebook</Link></li>
              <li><Link to="https://www.instagram.com/" target="_blank">Instagram</Link></li>
              <li><Link to="https://www.tiktok.com/" target="_blank">TikTok</Link></li>
            </ul>

          : <b>Please specific props in Nav component!</b>
        }
      </nav>
    );
  }

export default Nav;
