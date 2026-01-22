import style from './searchitem.module.scss';
import { searchIcon } from '@assets/index';
import { useTypingPlaceholder } from '../../../Hooks/useTypingPlaceholder';

export const SearchItem = () => {
  const phrases = ['Search cafe', 'Search...'];
  const { placeholder, setIsTyping, setPlaceholder } = useTypingPlaceholder(
    phrases,
    200,
  );

  return (
    <>
      <div className={style.wrapper}>
        <form className={style.form} action="">
          <label htmlFor="search" className="visually-hidden">
            Search
          </label>
          <input
            className={style.input}
            type="search"
            id="search"
            name="q"
            placeholder={placeholder}
            onFocus={() => {
              setIsTyping(false);
              setPlaceholder('');
            }}
            onBlur={() => setIsTyping(true)}
          />
          <img className={style.iconInput} src={searchIcon} alt="" />
        </form>
      </div>
    </>
  );
};
