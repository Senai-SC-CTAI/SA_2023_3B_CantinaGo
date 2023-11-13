import React from 'react'
import ReactDOM from 'react-dom/client'

// screens
import Login from './screens/Login/index.tsx'
import SignUp from './screens/SignUp/index.tsx'
import Food from './screens/Food/index.tsx'
import Home from './screens/Home/index.tsx'
import Search from './screens/Search/index.tsx'
import Manage from './screens/Manage/index.tsx'
import EditMenu from './screens/Manage/EditMenu/index.tsx'
import EditFood from './screens/Manage/EditFood/index.tsx'
import About from './screens/About/index.tsx'
import Statics from './screens/Statics/index.tsx'
import { Page } from './screens/Page/index.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
      {
        path: "/",
        element: <Page />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: '/food/:id',
        element: <Food />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/manage',
        element: <Manage />
      },
      {
        path: '/edit-menu',
        element: <EditMenu />
      },
      {
        path: '/edit-food',
        element: <EditFood />
      },
      {
        path: '/search',
        element: <Search/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/analytics',
        element: <Statics/>
      },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
