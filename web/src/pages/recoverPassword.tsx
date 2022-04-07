import Form from 'components/Form';
import FormInput from 'components/FormInput';
import Head from 'next/head';
import { useState } from 'react';
import { validateEmail } from 'utils/validationHelpers';

const RecoverPassword = () => {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const handleSubmit = async () => {
    try {
      //call Rails with values
      //if valid values
      //send email and change button text to a confirmation of email being sent
      //if invalid values
      //setSubmitErrorMessage with the error
    } catch {
      setSubmitErrorMessage('Unknown error has occurred. Please try again.');
    }
  };
  return (
    <article className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <Head>
        <title>Login</title>
      </Head>
      <Form onSubmit={handleSubmit} initialValues={{ email: '' }} submitErrorMessage={submitErrorMessage}>
        <FormInput id="email" name="email" label="Email" validate={validateEmail} />
      </Form>
    </article>
  );
};

export default RecoverPassword;
