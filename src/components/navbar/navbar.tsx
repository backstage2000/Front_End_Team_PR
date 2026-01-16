import { useState } from 'react';
import style from './navbar.module.scss';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            <a className={style.navbarLink} href="">
              HOME
            </a>
          </li>
          <li>
            <a className={style.navbarLink} href="">
              SEARCH
            </a>
          </li>
          <li>
            <a className={style.navbarLink} href="">
              MAP
            </a>
          </li>
          <li>
            <a className={style.navbarLink} href="">
              RESERVATIONS
            </a>
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
