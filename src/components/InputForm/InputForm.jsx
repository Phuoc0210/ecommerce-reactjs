import { Form } from 'react-bootstrap';
import styles from './styles.module.scss';

function MyFormGroup({
  label,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
  required = false,
  error = '',
}) {
  const { formGroup, errorMessage } = styles;
  return (
    <Form.Group className={formGroup} controlId={name}>
      <Form.Label>
        {label} {required && '*'}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        isInvalid={!!error}
        required={required}
      />
      {error && (
        <Form.Control.Feedback type='invalid' className={errorMessage}>
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default MyFormGroup;
