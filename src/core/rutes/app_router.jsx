import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../../features/home/views/HomeView.jsx';
import LoginView from '../../features/login/views/LoginView.jsx';
import RegisterView from '../../features/register/views/RegisterView.jsx';

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
  }
]);
