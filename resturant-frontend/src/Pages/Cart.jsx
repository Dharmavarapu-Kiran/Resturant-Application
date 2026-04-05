import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // 📦 Load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ❌ Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ➕➖ Update quantity
  const updateQuantity = (id, type) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (type === "inc") {
          return { ...item, quantity: item.quantity + 1 };
        } 
        if (type === "dec" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 💰 Total
  const total = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* 🖼️ Image */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/100")
                  }
                />

                {/* 📄 Info */}
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  {/* ➕➖ Quantity */}
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, "dec")}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, "inc")}>+</button>
                  </div>

                  {/* ❌ Remove */}
                  <button onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* 💳 Summary */}
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;