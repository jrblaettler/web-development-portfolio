import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  onClick: Function;
  children: string;
  className?: string;
  disabled?: boolean;
}
const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={() => props.onClick()} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
