import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header className="py-5 bg-navBackground">
            <div className="flex justify-between w-[80%] m-auto">
                <h2>Marketplace</h2>
                <Link>Cart</Link>
            </div>

        </header>
    )
}

export default Navbar
