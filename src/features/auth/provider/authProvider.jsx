import { useState, useEffect } from 'react';
import { AUTH_API } from '../../auth/util/authApi.js';
import Cookies from 'js-cookie';
import { AuthContext } from '../context/authContext';

export const AuthProvider = ({ children, fallback }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registro

  const signUp = async (user) => {
    try {
      const res = await AUTH_API.registerRequest(user);
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        setIsAuthenticated(true);
      } else {
        setErrors(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Login

  const signIn = async (user) => {
    try {
      const res = await AUTH_API.loginRequest(user);
      const data = await res.json();

      const cookies = Cookies.get();

      Cookies.set('token', cookies.token);
      if (res.ok) {
        setUser(data);
        setIsAuthenticated(true);
      } else {
        setErrors(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      const res = await AUTH_API.logout();
      if (res.ok) {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('ERROR AL DESLOGUEAR USUARIO', error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await AUTH_API.verifyTokenRequest();
        const data = await res.json();
        console.log(token);

        if (!res.ok) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(data);
        setLoading(false);
        console.log(token);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (fallback && loading) return fallback;

  return (
    <AuthContext.Provider value={{
      signUp,
      signIn,
      signOut,
      user,
      isAuthenticated,
      errors,
      loading
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
