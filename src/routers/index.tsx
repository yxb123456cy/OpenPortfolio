import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import { Placeholder } from './placeholder';
import Home from '../pages/home';
import About from '../pages/about';
import Resume from '../pages/resume';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Placeholder title="Projects" />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
