//imports hooks
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


//Cart page function
const CartPage = () => {
    //Redux hooks for managing store
    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    //Store checkout price 
    const [checkoutPrice, setCheckoutPrice] = useState(null)



    const removeProduct = (productId) => {
        dispatch(removeItem(productId))
    }

    useEffect(() => {
        //Calculate total price
        const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.sum, 0)
        setCheckoutPrice(totalPrice.toFixed(2))
        localStorage.setItem('Total Price', totalPrice.toFixed(2))
    }, [cart])

    console.log(cart)
    return (
        <section className='cart-section'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {cart === undefined ? <p>Cart is empty</p> : Object.values(cart).map(product => (
                        <article key={product.product_id} className='border-2 p-5'>
                            <div className='product-card'>
                                <h3 className="mb-4 text-xl font-semibold">{product.product_name}</h3>
                                <p>Quantity: {product.quantity}</p>
                                <p>$ {product.sum.toFixed(2)}</p>
                                <img src={`/${product.product_img}`} alt={product.product_name} />
                            </div>
                            <div className="btn-container">
                                <button className='p-2 bg-btnBackground text-btnText hover:bg-btnHover' onClick={() => removeProduct(product.product_id)}>Remove</button>
                            </div>
                        </article>
                    ))}

                </div>
                <span className='flex justify-center flex-col'>
                    {checkoutPrice > 0 ?
                        <>
                            <p className='flex justify-center'>Your total is ${checkoutPrice}</p>

                            <Link to='/checkout' className='flex justify-center border-2 w-[30%] m-auto checkout-btn p-2 bg-btnBackground text-btnText hover:bg-btnHover addBtn '>Checkout</Link>
                            {/* <button onClick={() => dispatch(clearCart(cart))}>Clear Cart</button> */}
                        </>
                        : <p>Your cart is empty</p>}
                </span>
            </div>
        </section>
    )
}





export default CartPage