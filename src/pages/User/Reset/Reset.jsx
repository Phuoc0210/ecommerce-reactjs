import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from '../styles.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Reset() {
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
    authback,
  } = styles;

  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form}>
          <h3 className={authTitle}>Forgot Password</h3>
          <Form.Group className={formGroup} controlId='email'>
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              required
            />
          </Form.Group>
          {/* <Form.Group className={formGroup} controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              required
            />
          </Form.Group> */}

          <Button className={submitButton} type='submit'>
            Reset Password
          </Button>
          <div className={authback}>
            <Link to='/login'>Login</Link>
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

export default Reset;
