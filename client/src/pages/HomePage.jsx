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
                    {homeProductData.data.map((product, index) => (
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

        // <section>
        //     <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        //         <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        //             {homeProductData.data.map((product, index) => (
        //                 <article key={index} className='border-2 p-5'>
        //                     <h3 className='mb-4 text-xl font-semibold'>{product.product_name}</h3>
        //                     <p>{product.product_desc}</p>
        //                     <p>$29.99</p>
        //                     <button className='py-2'>Add to Cart</button>
        //                 </article>
        //             ))}
        //         </div>
        //     </div>



        // </section>


    )
}





export default HomePage;


// import { useState } from "react"

// const HomePage = () => {
//     const [category, setCategory] = useState({
//         category: ''
//     })

//     const handleChange = (e) => {
//         setCategory({
//             ...category,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleFormSubmit = async (e) => {
//         const queryParams = new URLSearchParams(category).toString()
//         try {
//             const response = await fetch(`/api/products/category_name?${queryParams}`, {
//                 method: 'GET',
//             })

//             const data = await response.json()

//             console.log(data)
//         } catch (error) {
//             console.error('Form submit error: ', error)
//         }
//     }
//     return (
//         <>
//             <label htmlFor="category_name">Category Name</label>
//             <select name="category_name" id="category_name" value={category} onChange={handleChange}>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Pets">Pets</option>
//                 <option value="Furniture">Furniture</option>
//             </select>

//             <button onClick={handleFormSubmit}>Filter</button>
//         </>
//     )
// }

// export default HomePage