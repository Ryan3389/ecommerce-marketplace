import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"


const CartPage = () => {
    const cart = useSelector(state => state.cart.items)
    console.log(cart)
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {Object.values(cart).map(product => (
                        <article key={product.product_id} className='border-2 p-5'>
                            <h3 className="mb-4 text-xl font-semibold">{product.product_name}</h3>
                            <p>Quantity: {product.quantity}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}




export default CartPage