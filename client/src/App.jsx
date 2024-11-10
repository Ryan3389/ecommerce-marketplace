import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import FilterButtons from "./components/filterButtons"

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar />
        <FilterButtons />
        <Outlet />
      </PersistGate>
    </Provider>
  )
}


export default App