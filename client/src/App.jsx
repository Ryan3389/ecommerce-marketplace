import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import FilterButtons from "./components/filterButtons"
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <FilterButtons />
      <Outlet />
    </Provider>
  )
}


export default App