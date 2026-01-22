import { Button } from '@GlobalComponents';
import style from './cardCafe.module.scss';
import cafe from './img/cafe.png';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export const CardCafe = () => {
  return (
    <>
      <article className={style.card}>
        <div className={style.wrapper}>
          <a href="#" className={style.cardImg}>
            <img src={cafe} alt="CafePhoto" />
          </a>
          <div className={style.cardBody}>
            <h3 className={style.title}>Black Honey</h3>
            <div className={style.info}>
              <span className={style.location}>Kryva Lypa, 3</span>
              <span className={style.time}>9:00-21:00</span>
            </div>
            <div className={style.cardBottom}>
              <Button>Chose</Button>
              <Checkbox
                {...label}
                color="error"
                size="medium"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
