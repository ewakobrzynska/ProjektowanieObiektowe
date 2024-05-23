import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // importujemy BrowserRouter oraz Route i Switch
import Products from './components/Products';
import Cart from './components/Cart';
import Payments from './components/Payments';
import './App.css';

function App() {
  const [cart, setCart] = useState([]); // stan koszyka

  const addToCart = (product) => {
    setCart([...cart, product]); // dodawanie produktu do koszyka
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* Komponent Produkty */}
            <Products addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            {/* Komponent Koszyk */}
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route path="/payments">
            {/* Komponent Płatności */}
            <Payments />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
