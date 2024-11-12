import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const [checkoutPrice, setCheckoutPrice] = useState(null)

    const removeProduct = (productId) => {
        dispatch(removeItem(productId))
    }

    useEffect(() => {
        const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.sum, 0)
        console.log('Total Price: ', totalPrice.toFixed(2))
        setCheckoutPrice(totalPrice.toFixed(2))
    }, [cart])

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {cart === undefined ? <p>Cart is empty</p> : Object.values(cart).map(product => (
                        <article key={product.product_id} className='border-2 p-5'>
                            <h3 className="mb-4 text-xl font-semibold">{product.product_name}</h3>
                            <p>Quantity: {product.quantity}</p>
                            <p>$ {product.sum.toFixed(2)}</p>
                            <button onClick={() => removeProduct(product.product_id)}>Remove</button>
                        </article>
                    ))}

                </div>
                {/* <span className='flex justify-center flex-col'> */}
                {checkoutPrice > 0 ?
                    <>
                        <p className='flex justify-center'>Your total is ${checkoutPrice}</p>
                        <div className='w-[80%] m-auto'>
                            <Link to='/checkout' className='flex justify-center border-2 w-[30%] m-auto checkout-btn'>Checkout</Link>
                        </div>

                    </>
                    : <p>Your cart is empty</p>}
                {/* </span> */}
            </div>
        </section>
    )
}





export default CartPage