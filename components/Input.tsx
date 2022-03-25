import { ChangeEvent, FocusEvent, useState } from 'react';

interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange?(inputValue: string): void;
  onBlur?(inputValue: string): void;
}

const Input = (props: InputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange && isTouched) {
      props.onChange(e.target.value);
    }
    setValue(e.target.value);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(e.target.value);
    }
    setIsTouched(true);
  };

  return (
    <form>
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
    </form>
  );
};

export default Input;
