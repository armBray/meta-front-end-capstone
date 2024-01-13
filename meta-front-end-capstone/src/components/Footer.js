import logo from '../logo-footer.png';
import Nav from './Nav';

function Footer() {
    return (
      <footer>
        <div className="flex-h">
          <img id='logo-footer' src={logo} alt="logo footer" height="200px" />
          <nav  className='flex-h'>
            <div className='footer-nav'>
              <h3>Doormat Navigation</h3>
              <Nav name='dormat'/>
            </div>
            <div className='footer-nav'>
              <h3>Contacts</h3>
              <Nav name='contact'/>
            </div>
            <div className='footer-nav'>
              <h3>Social Media</h3>
              <Nav name='social'/>
            </div>
          </nav>
        </div>
      </footer>
    );
  }

export default Footer;
