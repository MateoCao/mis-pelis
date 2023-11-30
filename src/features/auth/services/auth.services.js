import { authApi, authApiPaths } from '../../../core/datasource/remote/auth/authApi';

export const register = async (newUser) => {
  const { status, data } = await authApi.post(authApiPaths.auth.register, newUser);
  return {
    status, data
  };
};

export const login = async (user) => {
  const { status, data } = await authApi.post(authApiPaths.auth.login, user);
  return {
    status, data
  };
};

export const logout = async () => {
  const { status } = await authApi.post(authApiPaths.auth.logout);
  return {
    status
  };
};

export const verifyToken = async () => {
  const { data, status } = await authApi.get(authApiPaths.auth.verifyToken);
  return {
    data, status
  };
};
