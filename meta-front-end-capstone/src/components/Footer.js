import logo from '../logo-footer.png';
import Nav from './Nav';

function Footer() {
    return (
      <footer>
          <img id='logo-footer' src={logo} alt="logo footer" height="200px" />

          <nav className='footer-nav'>
            <h3>Doormat Navigation</h3>
            <Nav name='dormat'/>
          </nav>
          <nav className='footer-nav'>
            <h3>Contacts</h3>
            <Nav name='contact'/>
          </nav>
          <nav className='footer-nav'>
            <h3>Social Media</h3>
            <Nav name='social'/>
          </nav>

      </footer>
    );
  }

export default Footer;
