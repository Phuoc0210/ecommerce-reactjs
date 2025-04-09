// services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_API_VERSION,
  withCredentials: true,
});

// Request Interceptor: gắn token
axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

// Response Interceptor: xử lý token hết hạn
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;
    if (
      error.response?.status === 401 &&
      !originalConfig._retry &&
      !['/login', '/refresh'].some((url) => originalConfig.url?.includes(url))
    ) {
      originalConfig._retry = true;
      try {
        const refreshResponse = await axios.post(
          import.meta.env.VITE_BACKEND_URL +
            import.meta.env.VITE_API_VERSION +
            '/refresh',
          {},
          { withCredentials: true }
        );
        const newToken = refreshResponse.data.accessToken;
        localStorage.setItem('accessToken', newToken);
        originalConfig.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalConfig);
      } catch (refreshError) {
        try {
          await axios.post(
            import.meta.env.VITE_BACKEND_URL +
              import.meta.env.VITE_API_VERSION +
              '/logout',
            {},
            { withCredentials: true }
          );
        } catch (logoutErr) {
          console.error(
            'Failed to logout after refresh token fail:',
            logoutErr
          );
        }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
