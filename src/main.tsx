import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

// Import the components
import IndexPage from './pages'
import ContactPage from './pages/contact'
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'
import DashboardPage from './pages/dashboard'
import InvoicesPage from './pages/invoices'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)