import { Outlet, createBrowserRouter } from 'react-router-dom';
import HomeView from '../../features/home/views/HomeView.jsx';
import LoginView from '../../features/login/views/LoginView.jsx';
import RegisterView from '../../features/register/views/RegisterView.jsx';
import MovieView from '../../features/movie/views/MovieView.jsx';
import SearchView from '../../features/search/views/SearchView.jsx';
import Navbar from '../components/Navbar.jsx';
import MyList from '../../features/my-list/views/MyList.jsx';
import PublicRoute from '../../features/auth/components/publicRoute.jsx';
import PrivateRoute from '../../features/auth/components/privateRoute.jsx';

function Layout () {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([{
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <PrivateRoute><HomeView /></PrivateRoute>
    },
    {
      path: '/login',
      element: <PublicRoute><LoginView /></PublicRoute>
    },
    {
      path: '/register',
      element: <PublicRoute><RegisterView /></PublicRoute>
    },
    {
      path: '/movie/:movieId',
      element: <PrivateRoute><MovieView /></PrivateRoute>
    },
    {
      path: '/search',
      element: <PrivateRoute><SearchView /></PrivateRoute>
    },
    {
      path: '/my-list',
      element: <PrivateRoute><MyList /></PrivateRoute>
    }
  ]
}

]);
