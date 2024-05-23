import React from 'react';

const Cart = ({ cart, setCart }) => {
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

