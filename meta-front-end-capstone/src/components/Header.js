import logo from '../Logo.svg';
import Nav from './Nav';

function Header() {
    return (
      <header>
        <img id='logo-header' src={logo} alt="logo" />
        <Nav name='header'/>
      </header>
    );
  }

export default Header;
