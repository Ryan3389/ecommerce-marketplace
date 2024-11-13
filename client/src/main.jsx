import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import HomePage from './pages/HomePage.jsx'
import ElectronicsPage from './pages/ElectronicsPage.jsx'
import PetsPage from './pages/PetsPage.jsx';
import FurniturePage from './pages/FurniturePage.jsx';
import SportsPage from './pages/SportsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutForm.jsx';
import ConfirmPage from './pages/ConfirmPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/electronics',
        element: <ElectronicsPage />
      },
      {
        path: '/pets',
        element: <PetsPage />
      },
      {
        path: '/furniture',
        element: <FurniturePage />
      },
      {
        path: '/sports',
        element: <SportsPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '/confirm',
        element: <ConfirmPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)