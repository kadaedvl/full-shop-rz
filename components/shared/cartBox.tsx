import Cart from './cart';
import './cartBox.css'

const CartBox:React.FC = () => {
    return(
    <div className="cart-box-container">
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
    </div>
    )
}

export default CartBox;