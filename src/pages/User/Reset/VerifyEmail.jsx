import { Button, Container, Form } from 'react-bootstrap';
import styles from '../styles.module.scss';
import MyFormGroup from '@/components/InputForm/InputForm';
import authApi from '@/services/authAPI';
import { useState } from 'react';
import notify from '@/services/notifyToast';
function VerifyEmail({ onNext }) {
  const { container, auth, auth_form, authTitle, submitButton } = styles;
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authApi.requestOtp({ email }).then((res) => {
        notify('success', res.data.message, 'bottom-right');
      });
      onNext(email);
    } catch (error) {
      const errorMsg = error?.response?.data?.message || 'Something went wrong';
      notify('error', errorMsg, 'bottom-right');
    }
  };
  const field = {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'email@gmail.com',
    required: true,
    value: email,
    onChange: setEmail,
  };
  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form} onSubmit={handleSubmit}>
          <h3 className={authTitle}>Forgot Password</h3>

          <MyFormGroup {...field} />

          <Button className={submitButton} type='submit'>
            Verify Email
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default VerifyEmail;
