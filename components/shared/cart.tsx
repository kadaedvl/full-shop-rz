import React from 'react';
import './cart.css';

interface Variation {
    name: string;
    price: number;
    size?: string;
}

interface CartPropsTypes {
    title: string;
    imageUrl: string;
    variations: Variation[];
}

const Cart: React.FC<CartPropsTypes> = React.memo(({ title, imageUrl, variations }) => {
    return (
        <div className='cart'>
            <h2 className='title'>{title}</h2>
            <img className='cart-img' src={imageUrl} alt={title} />
            <div>description of Product</div>
            <div>
                {variations.map(({ name, price, id }) => (
                    <div key={id}>{price}$</div>
                ))}
            </div>
            {variations.some(v => v.size) && <div>Sizes:</div>}
            <div className='cart-size-container'>
                {variations.map(({ name, id, size }) => (
                    size && <p key={id}>{size}</p>
                ))}
            </div>
            <button className='cart-button'>BUY</button>
        </div>
    );
});

export default Cart;