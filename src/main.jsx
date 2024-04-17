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
import { Toaster } from 'react-hot-toast';  
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import HouseDetails from './HouseDEtails/HouseDetails.jsx';
import Leaflet from './Leaflet/Leaflet.jsx';
import AllRoute from './AllRoute/AllRoute.jsx';
import House from './House/House.jsx';
import Order from './Order/Order.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Hmain from './Hmain/Hmain.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <AllRoute></AllRoute>
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
        path: '/house/:id',
        element:<HouseDetails></HouseDetails>,
        loader: () => fetch('/public/Details.json')
      },
      {
        path: '/',
        element: <AllRoute></AllRoute>
      },
      {
        path:'/house',
        element:<PrivateRoute><Hmain></Hmain></PrivateRoute>,
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
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
