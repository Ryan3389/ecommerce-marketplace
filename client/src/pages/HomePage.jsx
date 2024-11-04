import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const [homeProductData, setHomeProductData] = useState(null)

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
                setHomeProductData(data); // Store the fetched data

            } catch (error) {
                console.error("Error fetching data", error)
            }
        }
        fetchProducts();
    }, []);


    if (!homeProductData) return <div>Loading...</div>
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {homeProductData.data.map((product) => (
                        <article key={product.product_id} className='border-2 p-5'>
                            <ProductCard
                                title={product.product_name}
                                desc={product.product_desc}
                                product={product}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>


    )
}


export default HomePage;
