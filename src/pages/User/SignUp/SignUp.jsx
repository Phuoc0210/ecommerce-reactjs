import { Button, Container, Form } from 'react-bootstrap';
import styles from '../styles.module.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import authApi from '@/services/authAPI';
import notify from '@/services/notifyToast';
import MyFormGroup from '@/components/InputForm/InputForm';
import { infoField, accountField } from './fields';
import { validateForm } from '@/services/validateRegister';
function SignUp() {
  const {
    container,
    auth,
    auth_form,
    authTitle,
    submitButton,
    socialLogin,
    signup,
    socialTitle,
    formCheck,
  } = styles;

  const formRef = useRef();
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      notify('warning', 'Please fix the validation errors', 'bottom-right');
      return;
    } else {
      setValidationErrors({});
    }

    const data = {
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      address: values.address,
      gender: parseInt(values.gender),
      username: values.username,
      password: values.password,
    };

    try {
      const response = await authApi.register(data);
      const result = response.data;

      if (result?.message) {
        formRef.current.reset();
        notify('success', result.message, 'bottom-right');
        navigate('/login');
      }
    } catch (error) {
      const errorMsg = error?.response?.data?.message || 'Something went wrong';
      notify('error', errorMsg, 'bottom-right');
    }
  };
  console.log('re-render');

  return (
    <div className={container}>
      <Container className={auth}>
        <Form className={auth_form} ref={formRef} onSubmit={handleSubmit}>
          <h3 className={authTitle}>Sign Up</h3>

          {infoField.map((field) => (
            <MyFormGroup
              key={field.name}
              {...field}
              error={validationErrors[field.name]}
            />
          ))}

          <Form.Check
            className={formCheck}
            inline
            type='radio'
            label='Male'
            name='gender'
            value='1'
            defaultChecked
          />
          <Form.Check
            className={formCheck}
            inline
            type='radio'
            label='Female'
            name='gender'
            value='0'
          />
          {accountField.map((field) => (
            <MyFormGroup
              key={field.name}
              {...field}
              error={validationErrors[field.name]}
            />
          ))}
          <Button className={submitButton} type='submit'>
            Sign Up
          </Button>

          <div className={signup}>
            <span>Already have an account?</span>
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

export default SignUp;
