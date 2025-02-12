import { console } from 'inspector';
import CartGroup from './cartGroup';
import './cartBox.css'
import { Key } from 'react';

interface CartBoxPropsTypes {
    categories: any;
}
const CartBox: React.FC<CartBoxPropsTypes> = ({ categories }) => {
    return (
        <>
            {
                <div className="cart-box-container">
                    {categories.map((el: { id: Key | null | undefined; name: string; products: any; }) =>
                        <CartGroup key={el.id} title={el.name} catId={el.id} products={el.products} />)}
                </div>
            }
        </>
    )
}

export default CartBox;