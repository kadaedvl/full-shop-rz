'use client'
import './cartGroup.css'
import Cart from "./cart";
import { Key, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

interface CartGroupTypeProps {
    title: string;
    catId: number;
    products: any;
}


const CartGroup: React.FC<CartGroupTypeProps> = ({ title, catId, products }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef: any = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(catId)
        }
    }, [intersection?.isIntersecting])
    return (


        <div className="cart-group" id={title} ref={intersectionRef}>
            <h2 className='cart-group-title'>{title}</h2>
            <div className='cart-group-list'>
                {products.map((el: { id: Key | null | undefined; name: string; imageUrl: string; variations: any }) =>
                    <Cart key={el.id} title={el.name} imageUrl={el.imageUrl} variations={el.variations} />
                )}
            </div>

        </div>
    )
}

export default CartGroup;