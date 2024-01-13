import logo from '../logo-footer.png';
import Nav from './Nav';

function Footer() {
    return (
      <footer>
        <img id='logo-footer' src={logo} alt="logo footer" height="100px" />
        <nav>
          <div className='footer-nav-doormat'>
            <h3>Doormat Navigation</h3>
            <Nav name='header'/>
          </div>
          <div className='footer-nav-contact'>
            <h3>Contacts</h3>
            <Nav name='contact'/>
          </div>
          <div className='footer-nav-social'>
            <h3>Social Media</h3>
            <Nav name='social'/>
          </div>
        </nav>
      </footer>
    );
  }

export default Footer;
