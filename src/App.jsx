import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import Login from './features/auth/Login';
import RootLayout from './ui/RootLayout';
import Register from './features/auth/Register';
import ProductList from './features/product/ProductList';
import AdminProduct from './features/admin/AdminProduct';
import AddProduct from './features/admin/AddProduct';
import ProductEdit from './features/admin/ProductEdit';

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <ProductList />,
        },
        {
          path: 'login',
          element: <Login />,
        },

        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'admin-product',
          element: <AdminProduct />,
        },
        {
          path: 'add-product',
          element: <AddProduct />,
        },
        {
          path: 'edit-product/:id',
          element: <ProductEdit />,
        },


      ]
    },



  ]);


  return < RouterProvider router={router} />
}

export default App
