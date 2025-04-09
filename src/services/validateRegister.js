export const validateForm = (values) => {
  const errors = {};

  if (!values.fullname || values.fullname.length > 25) {
    errors.fullname = 'Fullname must be less than or equal to 25 characters';
  } else if (!/^[\p{L}\s'.-]+$/u.test(values.fullname)) {
    errors.fullname =
      'Fullname can only contain letters, spaces, apostrophes, dots, or dashes';
  }

  if (!values.email || !/^[\w-.]+@([\w-]+\.)+(com|vn)$/.test(values.email)) {
    errors.email =
      'Email must be in a valid format (e.g., name@example.com or .vn)';
  }

  if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = 'Phone number must be exactly 10 digits';
  }

  if (!values.username || values.username.length < 4) {
    errors.username = 'Username must be at least 4 characters';
  } else if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
    errors.username = 'Username must not contain special characters';
  }

  if (!values.password || values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (
    !/[A-Z]/.test(values.password) ||
    !/[a-z]/.test(values.password) ||
    !/[0-9]/.test(values.password) ||
    !/[^A-Za-z0-9]/.test(values.password)
  ) {
    errors.password =
      'Password must include uppercase, lowercase, number, and special character';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
