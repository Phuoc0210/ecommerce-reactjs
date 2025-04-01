import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from '../styles.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const {
    container,
    auth,
    auth_form,
    authTitle,
    formGroup,
    forgot,
    signup,
    socialTitle,
    submitButton,
    socialLogin,
  } = styles;

  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form}>
          <h3 className={authTitle}>Log In</h3>
          <Form.Group className={formGroup} controlId='email'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your username'
              required
            />
          </Form.Group>
          <Form.Group className={formGroup} controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              required
            />
          </Form.Group>
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
