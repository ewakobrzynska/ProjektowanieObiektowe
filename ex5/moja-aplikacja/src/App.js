import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Payments from './components/Payments';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sklep internetowy</h1>
      </header>
      <div className="container">
        <div className="products-container">
          <Services />
        </div>
        <div className="cart-payments-container">
          <div className="cart-container">
            <Orders />
          </div>
          <div className="payments-container">
            <Payments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

