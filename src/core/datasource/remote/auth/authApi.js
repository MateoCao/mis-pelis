import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://precious-red-walrus.cyclic.app/user',
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
