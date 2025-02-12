import './cart.css'

interface CartPropsTypes {
    title: string;
    imageUrl: string;
    variations: any;
}
const Cart: React.FC<CartPropsTypes> = ({ title, imageUrl, variations }) => {
    return (
        <div className='cart'>
            <h2 className='title'>{title}</h2>
            <img className='cart-img' src={imageUrl}></img>
            <div>description of Product</div>
            <div>{variations.map((el: { price: any; id: number }) => <div key={el.id}>{el.price}$ </div>)}</div>
            {variations.size && <div>Sizes:</div>}
            <div className='cart-size-container'>
                {variations.map((el: { size: any; id: number }) =>
                    <button className='cart-size' key={el.id}>{el.size} </button>
                )}
            </div>
            <button className='cart-button'>BUY</button>
        </div>
    )
}

export default Cart;