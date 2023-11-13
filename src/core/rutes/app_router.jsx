import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../../features/home/views/HomeView.jsx';
import LoginView from '../../features/login/views/LoginView.jsx';
import RegisterView from '../../features/register/views/RegisterView.jsx';
import MovieView from '../../features/movie/views/MovieView.jsx';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/login',
    element: <LoginView />
  },
  {
    path: '/register',
    element: <RegisterView />
  },
  {
    path: '/movie/:movieId',
    element: <MovieView />
  }
]);
