import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { store } from './store/store.js'

import AddEmployee from './pages/AddEmployee/index.js'
import Employees from './pages/Employees/index.js'
import Error404 from './pages/Error404'
import Root from './pages/Root.js'

import './styles/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'employees',
        children: [
          {
            index: true,
            element: <Employees />,
          },
          {
            path: 'add',
            element: <AddEmployee />,
          },
        ],
      },
      {},
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
