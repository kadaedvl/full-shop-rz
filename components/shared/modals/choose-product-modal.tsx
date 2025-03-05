"use client"

import { useRouter } from 'next/navigation';
import './choose-product-modal.css'
import { useState, useEffect } from 'react';

type ChooseProductModalProps = {
    product: any;
    productVariation: any;
}

const ChooseProductModal: React.FC<ChooseProductModalProps> = ({ product, productVariation }) => {
    const router = useRouter();
    const [selectSize, setSelectSize] = useState<string>('');

    useEffect(() => {
        if (productVariation.length > 0) {
            setSelectSize(productVariation[0]?.price?.toString() || '');
        }
    }, [productVariation]);

    const onSelectSize = (el) => {
        setSelectSize(el.price.toString());
    }

    const productElement = productVariation.map((el) => (
        <button
            className={el.price.toString() === selectSize ? 'buttonActive' : ''}
            onClick={() => onSelectSize(el)}
            key={el.price}>
            {el.size}
        </button>
    ));

    const showTotalPrice = () => {
        const totalPrice = productVariation.filter((el) => el.price.toString() === selectSize.toString());
        console.log(totalPrice);
    }
    return (
        <>
            <div className='background'></div>
            <div className="modal">
                <button className='modalCloseButton' onClick={() => router.back()}>X</button>
                <img src={product.imageUrl} alt={product.name} />
                <div className='modalInfo'>
                    <p>{product.name}</p>
                    <div className='content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</div>

                    {productVariation.length > 1 && (
                        <div className='modalSizes'>
                            {productElement}
                        </div>
                    )}

                    <button onClick={() => showTotalPrice()} className='modalBuyButton'>Add by {selectSize} $</button>
                </div>
            </div>
        </>
    )
}

export default ChooseProductModal;
