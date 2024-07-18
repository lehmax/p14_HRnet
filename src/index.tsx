import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Error404 from './pages/Error404'
import Root from './pages/Root.js'

import AddEmployee from './pages/AddEmployee/index.js'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees/index.js'
import './styles/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'employees',
        element: <Employees />,
      },
      {
        path: 'add-employee',
        element: <AddEmployee />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
