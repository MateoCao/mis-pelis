import axios from 'axios';

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_APP_ENVIROMENT === 'prod'
    ? 'https://precious-red-walrus.cyclic.app/user'
    : 'http://localhost:1235/user',
  withCredentials: true
});

export const authApiPaths = {
  auth: {
    register: '/register',
    login: '/login',
    verifyToken: '/verify-token',
    logout: '/logout'
  }
};
