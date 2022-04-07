import { ChangeEvent, createContext, FormEvent, ReactNode, useState } from 'react';

export type FormValues = Record<string, string>;

interface FormProps {
  children: ReactNode;
  onSubmit(form: FormValues): void;
  initialValues: FormValues;
  submitErrorMessage: string;
  buttonText?: string;
}

interface FormContextInterface {
  form: FormValues;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const FormContext = createContext({} as FormContextInterface);

const Form = (props: FormProps) => {
  const [form, setForm] = useState(props.initialValues);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(form);
  };

  return (
    <div className="w-full max-w-md">
      <form className="bg-white shadow-md rounded px-8 py-5 mb-4" onSubmit={handleSubmit}>
        <FormContext.Provider value={{ form, handleFormChange }}>{props.children}</FormContext.Provider>
        <div className="form-button-container">
          <p className="text-red-500 text-xs italic">{props.submitErrorMessage}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {props.buttonText || 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
