import './cartBox.css'
import CartGroup from './cartGroup';

const titles =
    [
        {
            id: 1,
            name: "Одяг",
        },
        {
            id: 2,
            name: "Аксесуари",
        },
        {
            id: 3,
            name: "Диски",
        },
        {
            id: 4,
            name: "Касети",
        },
        {
            id: 5,
            name: "Платівки",
        }
    ]

const CartBox: React.FC = () => {
    return (
        <div className="cart-box-container">
            {titles.map((el) =>
                <CartGroup key={el.id} title={el.name} catId={ el.id}/>
            )}
        </div>
    )
}

export default CartBox;