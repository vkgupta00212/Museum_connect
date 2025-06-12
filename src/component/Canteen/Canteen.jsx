import React, { useState } from 'react';
import AboutBackground from "../assets/about-background.png";
import './Canteen.css';

const Canteen = () => {
  const menuItems = [
    { id: 1, name: "Burger", price: 50 },
    { id: 2, name: "Pizza", price: 100 },
    { id: 3, name: "Fries", price: 40 },
    { id: 4, name: "Soda", price: 20 },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const placeOrder = () => {
    alert(`Order placed successfully! Total: ₹${total}`);
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="foodOrderWrapped">
      {/* Background Image */}
      <div className="singleBooking-backgroundImage">
        <img src={AboutBackground} alt="Background" />
      </div>

      {/* Food Order Section */}
      <div className="FoodOrder">
        <div className="booking-subheading">
          <h2>Food Order (Canteen)</h2>
        </div>

        {/* Menu */}
        <div className="menu">
          <h3>Menu</h3>
          <ul className="combineMenu">
            {menuItems.map((item) => (
              <li key={item.id} className="menu-item">
                <span className="menu-name">{item.name} - ₹{item.price}</span>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div className="cart">
          <h3>Cart</h3>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>Cart is empty</p>
          )}
          <h4>Total: ₹{total}</h4>
          <button
            className="calculate-button"
            onClick={placeOrder}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canteen;
