import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css' // Or App.css

// Import your page components
import IndexPage from './pages/IndexPage.tsx'; // Your main landing page
import DashboardPage from './pages/dashboard.tsx'; // Your new dashboard page
import NotFoundPage from './pages/NotFound.tsx'; // A page for 404 errors
import StatusResultPage from './pages/StatusResult.tsx';

// This is the "directory" for your frontend router
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <NotFoundPage />, // Show this if something breaks
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path:"/status",
    element: <StatusResultPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)