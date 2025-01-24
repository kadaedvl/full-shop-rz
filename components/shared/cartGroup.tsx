import './cartGroup.css'
import Cart from "./cart";

interface CartGroupTypeProps {
    title: string;
}

const CartGroup: React.FC<CartGroupTypeProps> = ({ title }) => {
    return (
        <div className="cart-group">
            <h2 className='cart-group-title'>{title}</h2>
            <div className='cart-group-list'>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>

        </div>
    )
}

export default CartGroup;