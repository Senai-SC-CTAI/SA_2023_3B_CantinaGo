import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './screens/Login/index.tsx'
import SignUp from './screens/SignUp/index.tsx'
import Food from './screens/Food/index.tsx'
import Home from './screens/Home/index.tsx'
import Buscar from './screens/Search/index.tsx'
import Gerenciamento from './screens/Gerenciamento/GerenciamentoHome/index.tsx'
import EditarCardapio from './screens/Gerenciamento/EditarCardapio/index.tsx'
import EditarComida from './screens/Gerenciamento/EditarComida/index.tsx'
import ListaComidas from './screens/Gerenciamento/ListaComidas/index.tsx'
import RegistrarComida from './screens/Gerenciamento/RegistrarComida/index.tsx'
import About from './screens/About/index.tsx'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Page } from './screens/Page/index.tsx'

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
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/gerenciamento',
        element: <Gerenciamento />
      },
      {
        path: '/editarCardapio',
        element: <EditarCardapio />
      },
      {
        path: '/editarComida',
        element: <EditarComida />
      },
      {
        path: '/listaComidas',
        element: <ListaComidas />
      },
      {
        path: '/registrarComida',
        element: <RegistrarComida />
      },
      {
        path: '/buscar',
        element: <Buscar/>
      },
      {
        path: '/sobre',
        element: <About/>
      },
      {
        path: '/page',
        element: <Page/>
      },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
