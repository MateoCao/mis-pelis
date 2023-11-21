import { RouterProvider } from 'react-router-dom';
import { appRouter } from './core/rutes/app_router';
import { MoviesProvider } from './context/MoviesContext';
import { AuthProvider } from './features/auth/provider/authProvider.jsx';

function App () {
  return (
    <>
      <AuthProvider>
        <MoviesProvider>
          <RouterProvider router={appRouter} />
        </MoviesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
