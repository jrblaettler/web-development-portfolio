import type { NextPage } from 'next';
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
      //if invalid values
      //setSubmitErrorMessage with the error and a link to register page
    } catch {
      setSubmitErrorMessage('Unknown error has occurred. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Form
        onSubmit={() => setSubmitErrorMessage('feafeafea')}
        initialValues={{ email: '', password: '' }}
        submitErrorMessage={submitErrorMessage}
      >
        <FormInput id="email" name="email" label="Email" validate={validateEmail} />
        <FormInput id="password" name="password" type="password" label="Password" validate={validatePassword} />
      </Form>
    </>
  );
};

export default Login;
