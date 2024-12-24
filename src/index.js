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
import { FileUpload } from './FileUpload';
import { MyLocalStorage } from './MyLocalStorage';
import { UseHeaders } from './UseHeaders';

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
  {
    path: '/fileupload',
    element: <FileUpload />,
  },
  {
    path: '/mylocalstorage',
    element: <MyLocalStorage />,
  },
  {
    path: '/useheaders',
    element: <UseHeaders />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

