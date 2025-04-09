const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^0\d{9}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const comparePassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return false;
  }
  return true;
};
const validate = (data) => {
  if (
    emailRegex.test(data?.email) &&
    phoneRegex.test(data?.phone) &&
    passwordRegex.test(data?.password) &&
    comparePassword(data.password, data.confirmPassword)
  ) {
    return true;
  }
  return false;
};

export { validate };
