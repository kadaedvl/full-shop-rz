import './cartGroup.css'
import Cart from "./cart";
import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

interface CartGroupTypeProps {
    title: string;
}


const CartGroup: React.FC<CartGroupTypeProps> = ({ title }) => {
    const intersectionRef: any = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title)
        }
    }, [intersection?.isIntersecting])
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