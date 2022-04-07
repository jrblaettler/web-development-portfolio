import Head from 'next/head';
import Form, { FormValues } from 'components/Form';
import FormInput from 'components/FormInput';
import { useState } from 'react';
import { validateEmail, validatePassword } from 'utils/validationHelpers';

const Login = () => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const handleSubmit = async (formValues: FormValues) => {
    try {
      //call Rails with values
      //if valid values reroute to landing page
      //if invalid email
      //setSubmitErrorMessage with the error and a link to register page
      //if invalid password
      //setSubmitErrorMessage with the error and a link to password recovery
    } catch {
      setSubmitErrorMessage('Unknown error has occurred. Please try again.');
    }
  };

  return (
    <article className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <Head>
        <title>Login</title>
      </Head>
      <Form onSubmit={handleSubmit} initialValues={{ email: '', password: '' }} submitErrorMessage={submitErrorMessage}>
        <FormInput id="email" name="email" label="Email" validate={validateEmail} />
        <FormInput id="password" name="password" type="password" label="Password" validate={validatePassword} />
      </Form>
    </article>
  );
};

export default Login;
