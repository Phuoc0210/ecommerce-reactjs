import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from '../styles.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function SingUp() {
  const {
    container,
    auth,
    auth_form,
    authTitle,
    formGroup,
    submitButton,
    socialLogin,
    signup,
    socialTitle,
  } = styles;

  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form}>
          <div style={{ float: 'left' }}>X</div>
          <h3 className={authTitle}>Log In</h3>
          <Form.Group className={formGroup} controlId='firstName'>
            <Form.Label>First Name *</Form.Label>
            <Form.Control type='text' placeholder='Joe' required />
          </Form.Group>
          <Form.Group className={formGroup} controlId='lastName'>
            <Form.Label>Last Name *</Form.Label>
            <Form.Control type='text' placeholder='Smith' required />
          </Form.Group>
          <Form.Group className={formGroup} controlId='phone'>
            <Form.Label>Phone number *</Form.Label>
            <Form.Control type='tel' placeholder='+84 72727...' required />
          </Form.Group>
          <Form.Group
            className={formGroup}
            controlId='email'
            placeholder='youremail@gmail.com'
          >
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type='text'
              placeholder='123, street 16, ...'
              required
            />
          </Form.Group>
          <Form.Group className={formGroup} controlId='password'>
            <Form.Label>Mật khẩu *</Form.Label>
            <Form.Control type='password' placeholder='******' required />
          </Form.Group>
          <Button className={submitButton} type='submit'>
            Sign Up
          </Button>
          <div className={signup}>
            <span>Don't have an account?</span>
            <Link to='/login'>Sign in</Link>
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

export default SingUp;
