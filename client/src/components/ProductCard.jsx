


const ProductCard = ({ title, desc, price }) => {
    return (
        <>
            <h3 className='mb-4 text-xl font-semibold'>{title}</h3>
            <p>{desc}</p>
            <p>${price}</p>
        </>
    )
}

export default ProductCard

