import authInstance from '@/configs/authInstance';
const authApi = {
  register: (data) => {
    return authInstance.post('/register', data);
  },
  login: (username, password) => {
    return authInstance.post(
      '/login',
      { username, password },
      {
        withCredentials: true,
      }
    );
  },
  logout: () => {
    return authInstance.post('/logout', {}, { withCredentials: true });
  },
  requestOtp: (data) => {
    return authInstance.post('/send-verify-otp', data);
  },
  verifyOPT: (data) => {
    return authInstance.post('/verify-otp', data);
  },
  resetPasswordWithOtp: (data) => {
    return authInstance.post('/reset-password', data);
  },
};

export default authApi;
