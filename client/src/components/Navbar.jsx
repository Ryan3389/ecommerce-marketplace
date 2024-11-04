import { Link } from "react-router-dom"
import CartPage from "../pages/CartPage"
const Navbar = () => {
    return (
        <header className="py-5 bg-navBackground">
            <div className="flex justify-between w-[80%] m-auto">
                <h2>Marketplace</h2>
                <Link to='/cart'>Cart</Link>
            </div>

        </header>
    )
}

export default Navbar
