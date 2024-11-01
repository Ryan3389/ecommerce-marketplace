import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import FilterButtons from "./components/filterButtons"

const App = () => {
  return (
    <>
      <Navbar />
      <FilterButtons />
      <Outlet />
    </>
  )
}

export default App