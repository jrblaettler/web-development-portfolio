import { ChangeEvent, FocusEvent, FormEvent, ReactChild, useState } from 'react';

interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: ReactChild;
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
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </>
  );
};

export default Input;
