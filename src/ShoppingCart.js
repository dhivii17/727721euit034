import React, { useState } from 'react';
import './ShoppingCart.css';

const Cart = () => {
  // Sample state to manage cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Dslr camera',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg',
      price: 15.50,
      quantity: 1,
      company: 'amzon',
      category: 'camera',
      rating: 4.5,
      availability: true,
      discount: 0,
    },
    {
      id: 2,
      name: 'Watch',
      image: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1523275335684-37898b6baf30',
      price: 2049,
      quantity: 1,
      company: 'Fasttrack',
      category: 'Analog',
      rating: 4.0,
      availability: true,
      discount: 0,
    },
    {
      id: 3,
      name: 'HeadPhones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      price: 8050,
      quantity: 1,
      company: 'Boat',
      category: 'Infinity',
      rating: 4.8,
      availability: true,
      discount: 0,
    }
  ]);

  // Function to handle quantity increment
  const handleIncrement = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Function to handle quantity decrement
  const handleDecrement = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Function to remove item from cart
  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  // Calculate total price
  const calculateTotal = () => {
    let newSubTotal = 0;
    cartItems.forEach(item => {
      newSubTotal += item.price * item.quantity;
    });
    const withTax = newSubTotal * 1.2;
    const newTotal = withTax;

    return {
      subTotal: newSubTotal.toFixed(2),
      total: newTotal.toFixed(2)
    };
  };

  const { subTotal, total } = calculateTotal();

  return (
    <div className="cart">
      <div className="container">
        <div className="grid_12">
          <h1>Shopping Cart</h1>
        </div>
        <ul className="items">
          {cartItems.map(item => (
            <li key={item.id} className="grid_4 item">
              <a href="#" className="btn-remove" onClick={() => handleRemove(item.id)}>
                <i className="far fa-trash-alt"></i>
              </a>
              <div className="preview">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="details" data-price={item.price}>
                <h3>{item.name}</h3>
                <p>{`Serves ${item.quantity} (${item.quantity * 100}g)`}</p>
                <p>Company: {item.company}</p>
                <p>Category: {item.category}</p>
                <p>Rating: {item.rating}</p>
                <p>Availability: {item.availability ? 'In Stock' : 'Out of Stock'}</p>
                <p>Discount: {item.discount}%</p>
              </div>
              <div className="inner_container">
                <div className="col_1of2 align-center picker">
                  <p>
                    <a href="#" className="btn-quantity plus" onClick={() => handleIncrement(item.id)}>
                      <i className="fas fa-plus"></i>
                    </a>
                    <div className="col_1of2 quantity-text">
                      <p><span className="current_quantity">{item.quantity}</span> @ £{item.price.toFixed(2)}</p>
                    </div>
                    <a href="#" className="btn-quantity minus" onClick={() => handleDecrement(item.id)}>
                      <i className="fas fa-minus"></i>
                    </a>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="grid_12 summary">
          <div className="inner_container">
            <div className="summary-content">
              <div className="col_1of2 meta-data">
                <div className="sub-total">
                  <em>Sub Total: </em><span className="amount">£{subTotal}</span>
                </div>
                <div className="taxes">
                  <em>Plus VAT: </em><span className="amount">@ 20%</span>
                </div>
              </div>
              <div className="col_1of2">
                <div className="total">
                  <span className="amount">Total £{total}</span>
                </div>
              </div>
            </div>
            <div className="btn-summary">
              <a href="#" className="btn-checkout btn-reverse">Continue Shopping</a>
              <a href="#" className="btn-checkout">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
