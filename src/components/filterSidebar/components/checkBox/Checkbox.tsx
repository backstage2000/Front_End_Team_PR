import style from './checkbox.module.scss';

export const Checkbox = ({ children }) => {
  return (
    <label className={style['checkbox-wrapper']}>
      <input type="checkbox" className={style['checkbox-element']} />
      <span>{children}</span>
    </label>
  );
};
