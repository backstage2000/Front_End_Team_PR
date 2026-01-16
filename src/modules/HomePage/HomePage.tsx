import { HeroSection } from './component/HeroSection/HeroSection';
import { CafeCatalog } from '@GlobalComponents';
import style from './homePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <section className="section">
        <HeroSection />
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.items}>
              <CafeCatalog />
              <CafeCatalog />
              <CafeCatalog />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
