import { MouseEvent } from 'react';

interface ButtonProps {
  label?: string;
  onClick: Function;
}
const Button = (props: ButtonProps) => {
  return <button onClick={() => props.onClick()}>{props.label || 'Submit'}</button>;
};

export default Button;
