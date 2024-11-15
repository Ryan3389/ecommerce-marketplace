


const ProductCard = ({ title, desc, price, img }) => {
    return (
        <>
            <h3 className='mb-4 text-xl font-semibold'>{title}</h3>
            <p>{desc}</p>
            <p>${price}</p>
            <img src={`/${img}`} alt="" />
        </>
    )
}

export default ProductCard

