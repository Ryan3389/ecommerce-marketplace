import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';


const ProductCard = ({ title, desc, product, onClick }) => {
    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    console.log(cart)
    return (
        <>
            <h3 className='mb-4 text-xl font-semibold'>{title}</h3>
            <p>{desc}</p>
            <p>$29.99</p>
            <button onClick={() => dispatch(addItem(product))} className='py-2'>Add to Cart</button>
        </>
    )
}

export default ProductCard

