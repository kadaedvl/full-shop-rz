'use client'
import { useEffect, useState } from "react";
import './cartButton.css'
import Link from "next/link";
import { useCartStore } from "./store/cart";

type DialogProps = {
  isOpen: boolean;
  onClose: boolean;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {

  const fetchCartItems = useCartStore(state => state.fetchCartItems);
  const cartItem = useCartStore(state => state.cartItem);
  const updateItemQuantuty = useCartStore(state => state.updateItemQuantuty);
  useEffect(() => { fetchCartItems() }, [])

  const onClickCountButton = (id: number, quantity: number, type: 'inc' | 'dec') => {
    const newQuantity = type === 'inc' ? quantity + 1 : quantity - 1;
    updateItemQuantuty(id, newQuantity);
  }

  return (
    <div
      className={`dialog-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div className={`dialog-content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>

        <div className="dialog-body">
          <div className="dialog-head">
            <div className="dialog-text">basket have: {cartItem.length} items</div>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <ul className="dialog-items-body">
            {cartItem.map((product) => (
              <li key={product.id} className="dialog-item">
                <img
                  src={product.imageUrl}
                  alt="Product"
                  className="product-image"
                />
                <span className="product-name">{product.name}</span>

                <div className="quantity-control">
                  <button disabled={product.quantity === 1 ? true : false} className="quantity-btn" onClick={() => onClickCountButton(product.id, product.quantity, 'dec')}>-</button>
                  <span className="quantity-value">{product.quantity}</span>
                  <button className="quantity-btn" onClick={() => onClickCountButton(product.id, product.quantity, 'inc')}>+</button>
                </div>
                <p className="product-price">{product.price * product.quantity}</p>

                <button className="remove-btn">x</button>
              </li>
            ))}

          </ul>
          <div className="dialog-footer">
            <div className="dialog-text"><b>Total price is</b> <span>1000$</span></div>
            <Link className="header-cart-button" href={"/cart"}>go basket</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="header-cart-button sheet-trigger" onClick={() => setIsOpen(true)}>
        <span className="header-cart-icon">🛒</span>
        <span className="header-cart-text">0 UAH | 0 item</span>
      </button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}></Dialog>
    </>
  );
}
