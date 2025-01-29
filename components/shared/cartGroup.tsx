import './cartGroup.css'
import Cart from "./cart";

interface CartGroupTypeProps {
    title: string;
    idCat: number;
    intersectionRef: any;
}

const CartGroup: React.FC<CartGroupTypeProps> = ({ title, idCat, intersectionRef }) => {
    return (
        <div className="cart-group" id={title} ref={intersectionRef}>
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