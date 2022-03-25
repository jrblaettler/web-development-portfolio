import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import Button from './Button';

interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  button?: boolean;
  buttonLabel?: string;
  onChange?(inputValue: string): void;
  onBlur?(inputValue: string): void;
  onSubmit?(inputValue: string): void;
}

const Input = (props: InputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange && isTouched) {
      props.onChange(e.target.value);
    }
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(e.target.value);
    }
    setIsTouched(true);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {props.button ? <button type="submit">{props.buttonLabel || 'Submit'}</button> : null}
    </form>
  );
};

export default Input;
