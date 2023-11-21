import { useAuth } from '../hook/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to='/' />;

  return children;
};

export default PublicRoute;
