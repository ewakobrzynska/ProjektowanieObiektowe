import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <h2>Zamówienia</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

