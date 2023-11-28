import { AuthProvider } from '../../features/auth/provider/authProvider';
import { MoviesProvider } from '../../context/MoviesContext';

const RootProvider = ({ children }) => {
  return (
    <AuthProvider
      fallback={
        <div>
          <h1>Cargando...</h1>
        </div>
      }
    >
      <MoviesProvider>
        {children}
      </MoviesProvider>
    </AuthProvider>
  );
};

export default RootProvider;
