import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../Redux/Actions/actionProduct';
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../login/login.css';
import './card.css'; // Import the CSS file

function Cart() {
  const cartItems = useSelector((state) => state.productReducer.cart);
  const dispatch = useDispatch();

  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      return;
    }
    dispatch(updateCartItemQuantity(productId, newQuantity));
  };

  const handleAcheterClick = () => {
    // Display the success message
    setPurchaseSuccess(true);

    // Clear the success message after a delay (adjust the delay as needed)
    setTimeout(() => {
      setPurchaseSuccess(false);
    }, 2000); // 2000 milliseconds (2 seconds) delay
  };

  return (
    <div className="Cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item && item._id}>
                <span>{item && item.title} - ${item && item.price}</span>
                <div>
                  <button onClick={() => handleQuantityChange(item && item._id, item && item.quantity - 1)}>-</button>
                  <span>{item && item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item && item._id, item && item.quantity + 1)}>+</button>
                </div>
                <span>${item && item.price * item.quantity}</span>
                <button onClick={() => handleRemoveFromCart(item && item._id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>
            <h3>Total: ${calculateTotalPrice()}</h3>
            <Button className='btdaw' variant="outline-secondary" onClick={handleAcheterClick}>Acheter</Button>
            <br></br>
            <br></br>
            
            {purchaseSuccess && <p>Achat avec succès!</p>}
            
            <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
