import CartGroup from './cartGroup';
import './cartBox.css'

interface CartBoxPropsTypes {
    categories: any;
}
const CartBox: React.FC<CartBoxPropsTypes> = ({ categories }) => {
    return (
        <>
            {
                <div className="cart-box-container">
                    {categories.map((el) => <CartGroup key={el.id} title={el.name} catId={el.id} products={el.products} />)}
                </div>
            }
        </>
    )
}

export default CartBox;