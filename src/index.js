import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import App from './App';
import SignIn from './SignIn';
import MyNumber from './MyNumber';
import HttpApp from './HttpApp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Product } from './Product';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Hello />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/mynumber',
    element: <MyNumber />,
  },
  {
    path: '/httpapp',
    element: <HttpApp />,
  },
  {
    path: '/product',
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

