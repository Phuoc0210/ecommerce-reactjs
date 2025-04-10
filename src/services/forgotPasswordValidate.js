// services/validateNewPassword.js
export const validateNewPassword = (values) => {
  const errors = {};

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
