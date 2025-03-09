import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
//  `../../public/${product.product_img}`

import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const HomePage = () => {
    const [homeProductData, setHomeProductData] = useState(null)

    const cart = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    console.log(cart)


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Network error')
                }

                const data = await response.json()
                console.log(data)
                setHomeProductData(data)
            } catch (error) {
                console.error("Error fetching data", error)
            }
        }
        fetchProducts();
    }, []);


    if (!homeProductData) return <div>Loading...</div>
    return (
        <section className='home-section'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {homeProductData.data.map((product) => (
                        <article key={product.product_id} className='border-2 p-5'>
                            <div className='product-card'>
                                <ProductCard
                                    title={product.product_name}
                                    desc={product.product_desc}
                                    price={product.product_price}
                                    img={product.product_img}
                                />
                            </div>
                            <div className='btn-container'>
                                <button onClick={() => dispatch(addItem(product))} className='p-2 bg-btnBackground text-btnText hover:bg-btnHover'>Add to Cart</button>
                            </div>

                        </article>

                    ))}
                </div>
            </div>
        </section>


    )
}


export default HomePage;
