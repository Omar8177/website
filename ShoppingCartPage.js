import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../actions";

const ShoppingCartPage = () => {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrease(item.id)}>+</button>
            <button onClick={() => handleDecrease(item.id)}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div>
        <p>Total: ${totalCost}</p>
        <button>Checkout (Coming Soon)</button>
        <button onClick={() => window.location.href = "/products"}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
