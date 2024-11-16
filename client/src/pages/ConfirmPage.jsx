import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { Link } from "react-router-dom";

const ConfirmPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)
    return (
        <>
            <h1>Payment recieved</h1>
            <p>Thank you for using marketplace </p>
            <Link to='/' onClick={() => dispatch(clearCart(cart))}>Home</Link>
        </>
    )
}

export default ConfirmPage