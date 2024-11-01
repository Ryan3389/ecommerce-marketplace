const ProductCard = ({ title, desc }) => {
    return (
        <>
            <h3 className='mb-4 text-xl font-semibold'>{title}</h3>
            <p>{desc}</p>
            <p>$29.99</p>
            <button className='py-2'>Add to Cart</button>
        </>
    )
}

export default ProductCard