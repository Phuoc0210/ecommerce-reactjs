// services/authInstance.js
import axios from 'axios';

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_API_VERSION,
  withCredentials: true,
});

export default authInstance;
