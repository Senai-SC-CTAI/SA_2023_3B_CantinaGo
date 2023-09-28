import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './screens/Login/index.tsx'
import SignUp from './screens/SignUp/index.tsx'
import Food from './screens/Food/index.tsx'
import Home from './screens/Home/index.tsx'
import Gerenciamento from './screens/Gerenciamento/index.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
      {
        path: "/",
        element: <Login />
      },
      {
        path: '/food/:id',
        element: <Food />
      },
      {
        path: '/home',
<<<<<<< HEAD
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp />
=======
        element: <Home/>
      },
      {
        path: '/gerenciamento',
        element: <Gerenciamento />
>>>>>>> 178d08511418ac67d084c5dec7506a2c114a77de
      }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
