import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Statistics from './Components/Statistics'
import Blog from './Components/Blog'
import About from './Components/About'
import ErrorPage from './Components/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import AppliedJobs from './Components/AppliedJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('Category.json'),
      },
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('Job.json'),
      },
      { path: '/statistics', element: <Statistics /> },
      { path: '/blog', element: <Blog /> },
      { path: '/appliedJobs', element: <AppliedJobs /> },

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
