import { Navbar } from '@GlobalComponents';
import style from './header.module.scss';

import Favorit from '@assets/icons/Favorit.svg';
import Profile from '@assets/icons/Profile.svg';

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className={style.header}>
          <div className={style.headerContent}>
            <Navbar />

            <div className={style.headerIcons}>
              <div className={`${style.iconFavorit} ${style.icon}`}>
                <img src={Favorit} alt="" />
              </div>
              <div className={`${style.iconProfile} ${style.icon}`}>
                <img src={Profile} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
