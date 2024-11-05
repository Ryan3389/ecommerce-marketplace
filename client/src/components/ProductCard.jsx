


const ProductCard = ({ title, desc, product, onClick }) => {
    return (
        <>
            <h3 className='mb-4 text-xl font-semibold'>{title}</h3>
            <p>{desc}</p>
            <p>$29.99</p>
        </>
    )
}

export default ProductCard

