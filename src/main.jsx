import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Login from './Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import Nlogin from './Login/Nlogin/Nlogin.jsx';
import Started from './Component/Register/Started/Started.jsx';
import Header from './Component/Header/Header.jsx';
import AuthProvider from './Component/Provaider/AuthProvider.jsx';
import Home from './Component/Home/Home.jsx';
import { Toaster } from 'react-hot-toast';  // Import Toaster from react-hot-toast
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navbar></Navbar>,
      },
      {
        path: "login",
        element:<Login></Login>
      },
      {
        path:"/nlogin",
        element:<Nlogin></Nlogin>
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path:'/started',
        element:<Started></Started>
      },
      {
        path: "/header",
        element: <Header></Header>
      },
      {
        path: "home",
        element: <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />  
    </AuthProvider>
  </React.StrictMode>
);
