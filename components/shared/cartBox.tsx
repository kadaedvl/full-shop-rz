"use client"
import { useEffect, useRef, useState } from 'react';
import './cartBox.css'
import CartGroup from './cartGroup';
import { useIntersection } from 'react-use';

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
    const [idCat, setIdCat] = useState(1)
    const intersectionRef: any = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(idCat)
        }
    }, [intersection?.isIntersecting])

    return (
        <div className="cart-box-container">
            {titles.map((el) =>
                <CartGroup key={el.id} title={el.name} idCat={el.id} intersectionRef={intersectionRef} />
            )}
        </div>
    )
}

export default CartBox;