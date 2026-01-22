import style from './footer.module.scss';
import { telegram, facebook, instagram } from '@assets/index';

export const Footer = () => {
  return (
    <footer>
      <div className={style.wrapper}>
        <h3 className={`${style.title}`}>CafeMatch</h3>

        <div className={style.links}>
          <a href="#">Privacy policy</a>
          <a href="#">About us</a>
          <a href="#">Terms</a>
        </div>
        <div className={style.icons}>
          <img src={telegram} alt="telegramIcon" />
          <img src={facebook} alt="facebookIcon" />
          <img src={instagram} alt="instagramIcon" />
        </div>
      </div>
    </footer>
  );
};
