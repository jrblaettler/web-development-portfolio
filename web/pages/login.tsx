import type { NextPage } from 'next';
import Head from 'next/head';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import { useState } from 'react';

const Login = () => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Form
        onSubmit={(value) => console.log(value)}
        initialValues={{ email: '', password: '' }}
        submitErrorMessage={submitErrorMessage}
      >
        <FormInput id="email" name="email" label="Email" />
        <FormInput id="password" name="password" type="password" label="Password" />
      </Form>
    </>
  );
};

export default Login;
