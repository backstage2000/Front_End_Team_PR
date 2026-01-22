import { HeroSection } from './component/HeroSection/HeroSection';
import { CafeCatalog } from '@GlobalComponents';
import style from './homePage.module.scss';
import Pagination from '@mui/material/Pagination';

export const HomePage = () => {
  return (
    <>
      <section className={`section ${style.section}`}>
        <HeroSection />
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.items}>
              <CafeCatalog />
              <CafeCatalog />
              <CafeCatalog />
            </div>
            <div className={style.pagination}>
              <Pagination size="large" count={5} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
