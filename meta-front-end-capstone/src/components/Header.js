import logo from '../Logo.svg';
import Nav from './Nav';

function Header() {
    return (
      <header>
        <div className="flex-h">
            <img id='logo-header' src={logo} alt="logo" />
            <Nav name='header'/>
        </div>
      </header>
    );
  }

export default Header;
