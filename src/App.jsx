import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import AddForm from './pages/AddForm';
import EditForm from './pages/EditForm';

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,

        },
        {
          path: 'add-form',
          element: <AddForm />,
        },
        {
          path: 'edit-form/:id',
          element: <EditForm />,
        },

        {
          path: 'about',
          element: <About />
        }

      ]
    },



  ]);


  return < RouterProvider router={router} />
}

export default App
