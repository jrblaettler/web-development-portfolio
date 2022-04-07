import { ChangeEvent, useContext, useState, FocusEvent } from 'react';
import { FormContext } from './Form';

interface FormInputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  onChange?(inputValue: string): void;
  onBlur?(inputValue: string): void;
  validate?: Function;
}

const FormInput = (props: FormInputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { form, handleFormChange } = useContext(FormContext);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    handleFormChange(e);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
    if (isTouched && props.validate) {
      setErrorMessage(await props.validate(e.target.value));
    }
  };

  const handleBlur = async (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(e.target.value);
    }
    setIsTouched(true);
    if (props.validate) {
      setErrorMessage(await props.validate(e.target.value));
    }
  };

  return (
    <div key={props.id} className="form-input-container">
      <label className="form-input-label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="form-input"
        type={props.type || 'text'}
        name={props.name}
        id={props.id}
        value={form[props.id]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isTouched ? <p className="form-input-error">{errorMessage}</p> : null}
    </div>
  );
};

export default FormInput;
