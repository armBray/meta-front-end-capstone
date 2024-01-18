import {useEffect, useRef, useState} from 'react'

import logo from '../../Logo.svg';
import hamburger from '../../assets/icons_assets/🦆 icon _hamburger menu.svg'
import ext from '../../assets/icons_assets/x-symbol-svgrepo-com.svg'
import Nav from './Nav';

function Header() {
  const headerRef = useRef(null)
  const hambRef = useRef(null)
  const menuRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // useEffect(() => {
  //   let prevScrollPos = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const headerElement = headerRef.current;
  //     if (!headerElement) {
  //       return;
  //     }
  //     if (prevScrollPos > currentScrollPos) {
  //       headerElement.style.transform = "translateY(0)";
  //     } else {
  //       headerElement.style.transform = "translateY(-500px)";
  //     }
  //     prevScrollPos = currentScrollPos;
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, []);

  useEffect(() => {
    const handleClickOpen = event => {
      const ulEl = navEl.querySelector('.div-header ul')
      ulEl.classList.toggle('div-header--open')
    };
    const handleClickClose = event => {
      const ulEl = navEl.querySelector('.div-header ul')
      ulEl.classList.remove('div-header--open')
    };

    const navEl = document.querySelector('.div-header')
    const hamburgerEl = hambRef.current;
    const menuEl = menuRef.current;

    hamburgerEl.addEventListener('click', handleClickOpen)
    menuEl.addEventListener('click', handleClickClose)

    return () => {
      hamburgerEl.removeEventListener('click', handleClickOpen);
      menuEl.removeEventListener('click', handleClickClose);
    };

  },[visible])

    return (
      <header ref={headerRef}>
        <div className="div-header flex-h">
            <img id='logo-header' src={logo} alt="logo" />

            { !visible ?
              <img className='hamburger' src={hamburger} alt="hambureger icon" ref={hambRef} onClick={() => {setVisible(!visible)}}/>
              :
              <>
                <img className='hamburger' src={ext} alt="exit icon" ref={hambRef} onClick={() => {setVisible(!visible)}}/>
              </>
            }

            <Nav refProp={menuRef} name='header' onClick={() => {setVisible(!visible)}} />

        </div>
      </header>
    );
  }

export default Header;
