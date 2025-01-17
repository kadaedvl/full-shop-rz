import './cart.css'
const Cart:React.FC = () => {
    return(
    <div className='cart'>
        <h2 className='title'>Name of Product</h2>
        <div className='cart-img'></div>
        <div>description of Product</div>
        <div>price</div>
        <button className='cart-button'>BUY</button>
    </div>
)
}

export default Cart;