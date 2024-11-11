
// import { useSelector } from "react-redux"
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';
import { useEffect, useState } from 'react';

const CartPage = () => {
    const [storageState, setStorageState] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("persist:root"))
        const items = JSON.parse(cartItems.items)

        setStorageState(items)
    }, [])
    const removeProduct = (productId) => {
        dispatch(removeItem(productId))
        window.location.reload()
    }

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <h1>Cart is empty</h1>
                    {storageState === null ? <p>Cart is empty</p> : Object.values(storageState).map(product => (
                        <article key={product.product_id} className='border-2 p-5'>
                            <h3 className="mb-4 text-xl font-semibold">{product.product_name}</h3>
                            <p>Quantity: {product.quantity}</p>
                            <p>$ {product.product_price}</p>
                            <button onClick={() => removeProduct(product.product_id)}>Remove</button>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    )
}





export default CartPage
// // import { useSelector } from "react-redux"
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem } from '../redux/cartSlice';

// const CartPage = () => {
//     const cart = useSelector(state => state.cart.items)
//     const dispatch = useDispatch()
//     console.log(cart)

// const removeProduct = (productId) => {
//     dispatch(removeItem(productId))
// }

//     return (
//         <section>
//             <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
//                 <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
//                     {cart === undefined ? <p>Cart is empty</p> : Object.values(cart).map(product => (
//                         <article key={product.product_id} className='border-2 p-5'>
//                             <h3 className="mb-4 text-xl font-semibold">{product.product_name}</h3>
//                             <p>Quantity: {product.quantity}</p>
//                             <p>$ {product.product_price}</p>
//                             <button onClick={() => removeProduct(product.product_id)}>Remove</button>
//                         </article>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     )
// }





// export default CartPage

