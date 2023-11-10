import { RouterProvider } from 'react-router-dom';
import { appRouter } from './core/rutes/app_router';
import { MoviesProvider } from './context/MoviesContext';
import Navbar from './components/Navbar';

function App () {
  return (
    <>
      <MoviesProvider>
        <Navbar />
        <RouterProvider router={appRouter} />
      </MoviesProvider>
    </>
  );
}

export default App;
