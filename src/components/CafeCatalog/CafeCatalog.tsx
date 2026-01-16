import { CardCafe } from '@GlobalComponents';
import style from './cafeCatalog.module.scss';

export const CafeCatalog = () => {
  return (
    <div className={style.catalog}>
      <div className={style.header}>
        <h3>Cafes of the week</h3>
        <a className={style['see-all']} href="#">
          See all
        </a>
      </div>
      <div className={style.items}>
        <CardCafe />
        <CardCafe />
        <CardCafe />
        <CardCafe />
      </div>
    </div>
  );
};
