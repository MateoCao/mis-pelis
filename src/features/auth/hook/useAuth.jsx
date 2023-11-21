import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used  within an AuthProvider');
  }
  const {
    signUp,
    signIn,
    logout,
    user,
    isAuthenticated,
    errors,
    loading
  } = context;
  return {
    signUp,
    signIn,
    logout,
    user,
    isAuthenticated,
    errors,
    loading
  };
};
