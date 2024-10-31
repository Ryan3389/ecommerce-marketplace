import { useEffect, useState } from 'react';

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
            {homeProductData.data.map((product, index) => (
                <div key={index}>
                    <h2>{product.product_name}</h2>
                    <p>{product.product_desc}</p>
                </div>
            ))}
        </section>


    )
    // if (!homeProductData) return <div>Loading...</div>

    // return (
    //     <div>
    //         <h1>Home Products</h1>
    //         <ul>
    //             {homeProductData.data.map((product, index) => (
    //                 <li key={index}>
    //                     <h2>{product.product_name}</h2>
    //                     <p>{product.product_desc}</p>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // )
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