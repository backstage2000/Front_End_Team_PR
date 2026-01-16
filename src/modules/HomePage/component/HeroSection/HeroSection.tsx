import style from './heroSection.module.scss';
import {
  HeroSectionOnDekstop,
  HeroSectionMobile,
  HeroSectionOnTablet,
} from '@assets/index';

export const HeroSection = () => {
  return (
    <>
      <div className={style.heroItems}>
        <picture>
          <source srcSet={HeroSectionMobile} media="(max-width: 639px)" />
          <source srcSet={HeroSectionOnTablet} media="(max-width: 1024px)" />
          <img
            className={style.img}
            src={HeroSectionOnDekstop}
            alt="HeroImgs"
          />
        </picture>

        <div className={style.heroTitle}>
          <h1 className={`title ${style.title}`}>
            Find Your Perfect Coffee & Workspace
          </h1>
          <p className={style.subTitle}>
            Explore top-rated cafes <br /> for relaxation, work, or meetings
          </p>
        </div>
      </div>
    </>
  );
};
