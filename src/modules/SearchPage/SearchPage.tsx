import { CafeCatalog, FilterSidebar } from '@GlobalComponents';
import style from './searchPage.module.scss';
import { SearchItem } from './components/SearchItem';
import { buttonFilter } from '@assets/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLockBodyScroll } from '../../Hooks/useLockBodyScroll';
import Pagination from '@mui/material/Pagination';

export const SearchPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useLockBodyScroll(isOpen);

  return (
    <section className="section">
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.sideBar}>
            <FilterSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
          <div className={style.catalog}>
            <div className={style.headerItems}>
              <SearchItem />
              <button onClick={toggleMenu} className={style.buttonFilter}>
                <img
                  className={style.img}
                  src={buttonFilter}
                  alt="buttonFilter"
                />
              </button>
            </div>
            <div className={style.currentFilter}>
              <strong>APPLYED FILTERS:</strong>
              <span className={style.valueFilter}>
                Laptop Friendly | Sugar-Free | Pet Friendly | Outdoor Seating
              </span>
              <button className={style.buttonClear}>Clear</button>
            </div>
            <div className={style.location}>
              <strong>CURRENT LOCATION:</strong>
              <span> Kyiv, Zoloti Vorota 4</span>
              <div>
                <Link className={style.map} to={'#'}>
                  Change on map
                </Link>
              </div>
            </div>
            <div className={style.catalogs}>
              <CafeCatalog />
              <CafeCatalog />
              <CafeCatalog />
            </div>
          </div>
        </div>
        <div className={style.pagination}>
          <Pagination size="large" count={5} />
        </div>
      </div>
    </section>
  );
};
