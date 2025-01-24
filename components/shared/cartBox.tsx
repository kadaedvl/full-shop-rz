import './cartBox.css'
import CartGroup from './cartGroup';

const CartBox: React.FC = () => {
    const titles = ["Одяг", "Аксесуари", "Диски", "Касети", "Платівки"]
    return (
        <div className="cart-box-container">
            {titles.map((el, index) =>
                <CartGroup key={index} title={el} />
            )}
        </div>
    )
}

export default CartBox;