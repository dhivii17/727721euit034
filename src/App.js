import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ShoppingCart />
          </Route>
          <Route path="/product">
          <Product />

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
