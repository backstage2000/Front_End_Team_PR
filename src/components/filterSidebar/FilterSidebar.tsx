import { Button } from '../Button/Button';
import AccordionUsage, { Accordion } from './components/Accordion';
import style from './filtersidebar.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export const FilterSidebar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${style.sidebar} ${isOpen ? `${style.open}` : ''}`}>
      <aside className={style.aside}>
        <div className={style.header}>
          <h2>Filters</h2>
          <button className={style.buttonClose} onClick={toggleMenu}>
            <CloseIcon fontSize={'small'} />
          </button>
        </div>
        <div className={style.body}>{AccordionUsage()}</div>
      </aside>
      <Button className={style.button}>Applay</Button>

      <div className={style.footer}>
        <div className={style.buttonBox}>
          <Button className={style.buttonClear}>Clear</Button>
          <Button>Apply</Button>
        </div>
      </div>
    </div>
  );
};
