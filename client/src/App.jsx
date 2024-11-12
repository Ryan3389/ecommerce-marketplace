import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import FilterButtons from "./components/filterButtons"

//Redux imports
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'

//Stripe imports 
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QFgmzIdSvSdDzBnzO1SStzqJoGpBirYza1x46XxpjR0cWuiRp1CoYgCJSitpjsfnjqQ7ZvwijPZjBLQn8oZfLkF00Z0rIxDnM');
const App = () => {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Fetch client secret from backend
    fetch('/api/create-payment-intent/payment', {
      method: 'POST', // Send a POST request
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error fetching client secret:', error))
  }, [])

  const options = {
    clientSecret,
  };

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navbar />
            <FilterButtons />
            <Outlet />
          </PersistGate>
        </Provider>
      </Elements>
    )
  )
}


export default App