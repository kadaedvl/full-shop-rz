"use client"

import { useRouter } from 'next/navigation';
import './choose-product-modal.css'
import { useState } from 'react';

type ChooseProductModalProps = {
    product: any;
    productVariation: any;
}

const ChooseProductModal: React.FC<ChooseProductModalProps> = ({ product, productVariation }) => {
    const router = useRouter();
    const onSelectSize = (el) => {
        setSelectSize(el.price)
    }
    const [selectSize, setSelectSize] = useState('10');
    return (
        <>
            <div className='background'></div>
            <div className="modal">
                <button className='modalCloseButton' onClick={() => router.back()}>X</button>
                <img src={product.imageUrl} />
                <div className='modalInfo'>
                    <p>{product.name}</p>
                    <div className='content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio exercitationem aperiam fugiat ex animi odit iste expedita iusto, eum asperiores amet culpa, beatae dolore vitae illo eligendi maxime quod voluptatum!</div>
                    {productVariation.length !== 1 ? console.log('YES') : console.log('NO')}
                    <div className='modalSizes'>
                        {productVariation.map((el) => (
                            <button
                                className={el.price === selectSize ? 'buttonActive' : ''}
                                onClick={() => onSelectSize(el)}
                                key={el.price}>
                                {el.size}
                            </button>
                        ))}
                    </div>
                    <button className='modalBuyButton'>Add by {selectSize} $</button>
                </div>
            </div>
        </>
    )
}

export default ChooseProductModal;