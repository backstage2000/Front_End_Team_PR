import { useState } from 'react';
import style from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { useLockBodyScroll } from '../../Hooks/useLockBodyScroll';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useLockBodyScroll(isOpen);

  return (
    <>
      <a className={`${style.headerLogo} }`} href="#">
        CafeMatch
      </a>

      <nav
        className={`${style.navbar}   ${isOpen ? style['navbar--active'] : ''}`}
      >
        <h2 className={style.navbarTitle}>CafeMatch</h2>

        <ul className={style.navbarList}>
          <li>
            <NavLink to={'/'} className={style.navbarLink}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={'/search'} className={style.navbarLink}>
              SEARCH
            </NavLink>
          </li>
          <li>
            <NavLink to={'#'} className={style.navbarLink}>
              MAP
            </NavLink>
          </li>
          <li>
            <NavLink to={'#'} className={style.navbarLink}>
              RESERVATIONS
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleMenu}
        className={`${style.burger} ${isOpen ? style['burger--active'] : ''}`}
      ></button>
    </>
  );
};
