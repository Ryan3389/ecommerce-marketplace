import { Link } from "react-router-dom"
const FilterButtons = () => {
    return (
        <span className="flex justify-center">
            <Link to='/' className="mx-5">All</Link>
            <Link to='/electronics' className="mx-5">Electronics</Link>
            <Link className="mx-5">Pets</Link>
            <Link className="mx-5">Furniture</Link>
            <Link className="mx-5">Sports</Link>

        </span>

    )
}

export default FilterButtons