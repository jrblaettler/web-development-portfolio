import Form, { FormValues } from 'components/Form';
import FormInput from 'components/FormInput';
import Head from 'next/head';
import { useState } from 'react';
import { validateEmail, validatePassword, validateName } from 'utils/validationHelpers';

const Register = () => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const handleSubmit = async (formValues: FormValues) => {
    try {
      //call Rails with values
      //if valid values reroute to landing page
      //if invalid values
      //setSubmitErrorMessage with the error
    } catch {
      setSubmitErrorMessage('Unknown error has occurred. Please try again.');
    }
  };

  return (
    <article className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <Head>
        <title>Register</title>
      </Head>
      <Form
        onSubmit={handleSubmit}
        initialValues={{ email: '', name: '', password: '' }}
        submitErrorMessage={submitErrorMessage}
      >
        <FormInput id="name" name="name" label="Name" validate={validateName} />
        <FormInput id="email" name="email" label="Email" validate={validateEmail} />
        <FormInput id="password" name="password" type="password" label="Password" validate={validatePassword} />
      </Form>
    </article>
  );
};

export default Register;
