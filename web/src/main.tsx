import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './screens/Home/index.tsx'
import Food from './screens/Food/index.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
      {
        path: "/",
        element: <App />
      },
      {
        path: '/food/:id',
        element: <Food/>
      }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
