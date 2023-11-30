import { useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import { register as userRegister, login as userLogin, logout as userLogout, verifyToken } from '../services/auth.services.js';

export const AuthProvider = ({ children, fallback }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registro

  const signUp = async (newUser) => {
    try {
      const { status, data } = await userRegister(newUser);
      if (status === 201) {
        setUser(data);
        setIsAuthenticated(true);
        return data;
      } else {
        setErrors(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Login

  const signIn = async (user) => {
    try {
      const { status, data } = await userLogin(user);

      if (status === 201) {
        setUser(data);
        setIsAuthenticated(true);
        return data;
      } else {
        setErrors(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      const { status } = await userLogout();
      if (status === 200) {
        Cookies.remove('token');
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('ERROR AL DESLOGUEAR USUARIO', error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const { status, data } = await verifyToken();

        if (status !== 200) {
          console.log('asd');
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(data);
        setLoading(false);
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
