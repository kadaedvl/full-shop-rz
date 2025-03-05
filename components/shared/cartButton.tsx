'use client'
import { useState } from "react";
import './cartButton.css'
import Link from "next/link";

function Dialog({ isOpen, onClose }) {
  return (
    <div
      className={`dialog-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div className={`dialog-content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="dialog-body">
          <div className="dialog-head">
            <div className="dialog-text">basket have: 3 items</div>
            <button className="close-button" onClick={onClose}>×</button>
          </div>

          <ul className="dialog-items-body">
            <li className="dialog-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1971/1971012.png"
                alt="Product"
                className="product-image"
              />
              <p className="product-name">Product 5</p>

              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>

              <p className="product-price">100$</p>

              <button className="remove-btn">x</button>
            </li>
            <li className="dialog-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1971/1971012.png"
                alt="Product"
                className="product-image"
              />
              <p className="product-name">Product 5</p>

              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>

              <p className="product-price">100$</p>

              <button className="remove-btn">x</button>
            </li>
            <li className="dialog-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1971/1971012.png"
                alt="Product"
                className="product-image"
              />
              <p className="product-name">Product 5</p>

              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>

              <p className="product-price">100$</p>

              <button className="remove-btn">x</button>
            </li>
            <li className="dialog-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1971/1971012.png"
                alt="Product"
                className="product-image"
              />
              <p className="product-name">Product 5</p>

              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>

              <p className="product-price">100$</p>

              <button className="remove-btn">x</button>
            </li>
            <li className="dialog-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1971/1971012.png"
                alt="Product"
                className="product-image"
              />
              <p className="product-name">Product 5</p>

              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>

              <p className="product-price">100$</p>

              <button className="remove-btn">x</button>
            </li>
          </ul>
          <div className="dialog-footer">
            <div className="dialog-text">Total quantity: 2</div>
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
