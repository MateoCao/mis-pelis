import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return children;

  return <Navigate to='/login' />;
};

export default PrivateRoute;
