import style from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${style.button} ${className || ''}`}>
      <span>{children}</span>
    </button>
  );
};
