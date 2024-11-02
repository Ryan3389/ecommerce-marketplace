import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const FilteredProducts = ({ categoryName }) => {
    const [category, setCategory] = useState({
        category_name: categoryName
    })
    const [productData, setProductData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const queryParams = new URLSearchParams(category).toString()
            try {
                const response = await fetch(`/api/products/category_name?${queryParams}`, {
                    method: 'GET',
                })
                if (!response.ok) {
                    console.log('Network error')
                }
                const data = await response.json()
                setProductData(data)

            } catch (error) {
                console.error('Error fetching filtered products', error)
            }
        }
        fetchData()
    }, [])
    if (!productData) return <div>Loading...</div>
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {productData.data.map((product, index) => (
                        <article key={index} className='border-2 p-5'>
                            <ProductCard
                                title={product.product_name}
                                desc={product.product_desc}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FilteredProducts
