import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './screens/Login/index.tsx'
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
        element: <Food/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/gerenciamento',
        element: <Gerenciamento />
      }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
