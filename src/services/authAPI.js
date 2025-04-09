import authInstance from '@/configs/authInstance';
const authApi = {
  demo: () => {
    return authInstance.post('/demo');
  },
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
};

export default authApi;
