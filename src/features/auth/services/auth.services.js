import { authApi, authApiPaths } from '../../../core/datasource/remote/auth/authApi';

export const register = async (newUser) => {
  try {
    const { status, data } = await authApi.post(authApiPaths.auth.register, newUser);
    return {
      status, data
    };
  } catch (error) {
    const { data, status } = error.response;
    return {
      data, status
    };
  }
};

export const login = async (user) => {
  try {
    const { status, data } = await authApi.post(authApiPaths.auth.login, user);
    return {
      status, data
    };
  } catch (error) {
    const { data, status } = error.response;
    return {
      data, status
    };
  }
};

export const logout = async () => {
  try {
    const { status } = await authApi.post(authApiPaths.auth.logout);
    return {
      status
    };
  } catch (error) {
    const { status } = error.response;
    return {
      status
    };
  }
};

export const verifyToken = async () => {
  try {
    const { status, data } = await authApi.get(authApiPaths.auth.verifyToken);
    return {
      status, data
    };
  } catch (error) {
    const { status, data } = error.response;
    return {
      status, data
    };
  }
};
