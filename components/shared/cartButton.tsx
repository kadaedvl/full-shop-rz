'use client'
import { useEffect, useState } from "react";
import './cartButton.css'
import Link from "next/link";
import { useCartStore } from "./store/cart";

function Dialog({ isOpen, onClose }) {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const fetchCartItems = useCartStore(state => state.fetchCartItems);
  const cartItem = useCartStore(state => state.cartItem);
  useEffect(() => { fetchCartItems() }, [])
  console.log(cartItem)
  const [TestProduct, setTestProduct] = useState([
    {
      id: 1,
      imgUrl: "https://cdn-icons-png.flaticon.com/512/1971/1971012.png",
      name: "product 1",
      quantity: 2,
      price: 100
    },
    {
      id: 2,
      imgUrl: "https://cdn-icons-png.flaticon.com/512/1971/1971012.png",
      name: "product 2",
      quantity: 3,
      price: 200
    },
    {
      id: 3,
      imgUrl: "https://cdn-icons-png.flaticon.com/512/1971/1971012.png",
      name: "product 3",
      quantity: 4,
      price: 100
    }
  ]);

  const total = TestProduct.reduce(
    (acc, product) => {
      acc.totalQuantity += product.quantity;
      acc.totalPrice += product.quantity * product.price;
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );


  const updateQuantity = (productId: number, newQuantity: number) => {
    setTestProduct((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
            ...product,
            quantity: newQuantity
          }
          : product
      )
    );
  };
  const deleteItem = (itemId) => {
    setTestProduct((prevProducts) =>
      prevProducts.filter((product) =>
        product.id !== itemId
      )
    );
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
          {total.totalPrice !== 0 ?
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
                    <button className="quantity-btn" onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))}>-</button>
                    <span className="quantity-value">{product.quantity}</span>
                    <button className="quantity-btn" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                  {/*  */}
                  <p className="product-price">{product.price * product.quantity}</p>

                  <button className="remove-btn" onClick={() => deleteItem(product.id)}>x</button>
                </li>
              ))}

            </ul>
            : <ul className="dialog-items-body">You add any products to the basket. <a href="/">back to shop</a></ul>}
          <div className="dialog-footer">
            <div className="dialog-text"><b>Total price is</b> <span>{total.totalPrice}$</span></div>
            {total.totalPrice !== 0 ? <Link className="header-cart-button" href={"/cart"}>go basket</Link> : <Link className="header-cart-button" href={"/"}>go back to shop</Link>}
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
