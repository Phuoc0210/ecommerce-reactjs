import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from '../styles.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import authApi from '@/services/authAPI';
import { validate } from './validate';
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
    formCheck,
  } = styles;
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const resetInput = () => {
    setFullname('');
    setEmail('');
    setPhone('');
    setAddress('');
    setGender(1);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const signUp = async (e) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
      phone,
      address,
      gender,
      username,
      password,
    };
    if (validate(data)) {
      try {
        const res = await authApi.register(data);
        resetInput();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Had an error');
    }
  };

  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form} onSubmit={signUp}>
          <h3 className={authTitle}>Log In</h3>
          <Form.Group className={formGroup} controlId='fullName'>
            <Form.Label>Fullname *</Form.Label>
            <Form.Control
              type='text'
              placeholder='Nguyen Van A'
              required
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className={formGroup}
            controlId='email'
            placeholder='youremail@gmail.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            <Form.Label>Email *</Form.Label>
            <Form.Control type='email' placeholder='nva@gmail.com' required />
          </Form.Group>
          <Form.Group className={formGroup} controlId='phone'>
            <Form.Label>Phone number *</Form.Label>
            <Form.Control
              type='tel'
              placeholder='+84 72727...'
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className={formGroup} controlId='address'>
            <Form.Label>Address *</Form.Label>
            <Form.Control
              type='text'
              placeholder='Smith'
              required
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Check
            className={formCheck}
            inline
            label='Male'
            name='group1'
            type='radio'
            value={1}
            id={`inline-radio-1`}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            defaultChecked
          />
          <Form.Check
            className={formCheck}
            inline
            label='FeMale'
            name='group1'
            type='radio'
            value={0}
            id={`inline-radio-2`}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />

          <Form.Group className={formGroup} controlId='username'>
            <Form.Label>Username *</Form.Label>
            <Form.Control
              type='text'
              placeholder='nva...'
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className={formGroup} controlId='password'>
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type='password'
              placeholder='******'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className={formGroup} controlId='confirmPassword'>
            <Form.Label>Confirm Password *</Form.Label>
            <Form.Control
              type='password'
              placeholder='******'
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
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
