import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styles from '../styles.module.scss';
import MyFormGroup from '@/components/InputForm/InputForm';
import authApi from '@/services/authAPI';
import notify from '@/services/notifyToast';
function ConfirmOtp({ email, onNext }) {
  const { auth, auth_form, authTitle, submitButton, container } = styles;
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authApi.verifyOPT({ email, otp }).then((res) => {
        notify('success', res.data.message, 'bottom-right');
        onNext();
      });
    } catch (error) {
      const errorMsg = error?.response?.data?.message || 'Something went wrong';
      notify('error', errorMsg, 'bottom-right');
    }
  };

  const field = {
    label: 'OTP',
    name: 'opt',
    type: 'number',
    placeholder: '_ _ _ _ _ _',
    required: true,
    value: otp,
    onChange: setOtp,
  };
  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form} onSubmit={handleSubmit}>
          <h3 className={authTitle}>Forgot Password</h3>

          <MyFormGroup {...field} />

          <Button className={submitButton} type='submit'>
            Confirm OPT
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ConfirmOtp;
