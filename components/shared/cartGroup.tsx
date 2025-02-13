'use client'
import { useCategoryStore } from '@/store/category';
import { Key, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import Cart from "./cart";
import './cartGroup.css'

interface CartGroupTypeProps {
    title: string;
    catId: number;
    products: any;
}


const CartGroup: React.FC<CartGroupTypeProps> = ({ title, catId, products }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef: any = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        threshold: 1,
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
                {products.map((el) =>
                    <a key={el.id} href={`/product/${el.id}`}>
                        <Cart title={el.name} imageUrl={el.imageUrl} variations={el.variations} />
                    </a>
                )}
            </div>

        </div>
    )
}

export default CartGroup;