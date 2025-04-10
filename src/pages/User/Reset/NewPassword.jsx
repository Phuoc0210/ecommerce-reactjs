import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styles from '../styles.module.scss';
import MyFormGroup from '@/components/InputForm/InputForm';
import authApi from '@/services/authAPI';
import notify from '@/services/notifyToast';
import { useNavigate } from 'react-router-dom';
import { validateNewPassword } from '@/services/forgotPasswordValidate';

function NewPassword({ email }) {
  const { auth, auth_form, authTitle, submitButton, container } = styles;
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(validationErrors);

    setValidationErrors({});
    const errors = validateNewPassword({
      password: newPassword,
      confirmPassword,
    });

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      notify('warning', 'Please fix the validation errors', 'bottom-right');
      return;
    }

    try {
      await authApi.resetPasswordWithOtp({ email, newPassword }).then((res) => {
        notify('success', res.data.message, 'bottom-right');
        navigate('/login');
      });
    } catch (error) {
      const errorMsg = error?.response?.data?.message || 'Something went wrong';
      notify('error', errorMsg, 'bottom-right');
    }
  };

  const newPasswordField = {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '******',
    required: true,
    value: newPassword,
    onChange: setNewPassword,
  };

  const confirmPasswordField = {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: '******',
    required: true,
    value: confirmPassword,
    onChange: setConfirmPassword,
  };

  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form} onSubmit={handleSubmit}>
          <h3 className={authTitle}>Reset New Password</h3>

          <MyFormGroup
            {...newPasswordField}
            error={validationErrors.password}
          />
          <MyFormGroup
            {...confirmPasswordField}
            error={validationErrors.confirmPassword}
          />

          <Button className={submitButton} type='submit'>
            Reset Password
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default NewPassword;
