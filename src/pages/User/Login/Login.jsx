import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from '../styles.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authApi from '@/services/authAPI';
import notify from '@/services/notifyToast';
import MyFormGroup from '@/components/InputForm/InputForm';
function Login() {
  const {
    container,
    auth,
    auth_form,
    authTitle,
    forgot,
    signup,
    socialTitle,
    submitButton,
    socialLogin,
  } = styles;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameField = {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Enter your username',
    required: true,
    value: username,
    onChange: setUsername,
  };

  const passwordField = {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
    value: password,
    onChange: setPassword,
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.login(username, password);

      const { success, message, accessToken, user } = response.data;

      if (success) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

        notify('success', message, 'bottom-right');
        navigate('/home');
      }
    } catch (err) {
      const errorMsg = err?.response?.data?.message || 'Something went wrong';
      notify('error', errorMsg, 'bottom-right');
    }
  };
  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form} onSubmit={handleLogin} key='login-form'>
          <h3 className={authTitle}>Log In</h3>
          <MyFormGroup {...usernameField} />
          <MyFormGroup {...passwordField} />
          <div className={forgot}>
            <Link to='/forgot'>Forgot password?</Link>
          </div>
          <Button className={submitButton} type='submit'>
            Log In
          </Button>
          <div className={signup}>
            <span>Don't have an account?</span>
            <Link to='/register'>Sign up</Link>
          </div>
          <p className={socialTitle}>or connect with</p>
          <div className={socialLogin}>
            <Button variant='primary'>
              <FaFacebookF /> <div>Facebook</div>
            </Button>
            <Button variant='danger'>
              <FaGoogle />
              <div>Google</div>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
