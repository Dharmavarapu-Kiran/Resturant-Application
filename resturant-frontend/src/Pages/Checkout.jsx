import React, { useState } from "react";
import "../styles/Checkout.css";

function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  const handleOrder = () => {
    // 🔒 validation
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    // 💾 Save address
    localStorage.setItem("address", JSON.stringify(form));

    // 📦 Save order
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      address: form,
      date: new Date().toLocaleString()
    };

    existingOrders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // 🧹 Clear cart
    localStorage.removeItem("cart");

    alert("Order Placed Successfully 🎉");
    window.location.href = "/";
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-box">

        {/* 📍 Address Form */}
        <div className="address-form">
          <h3>Delivery Details</h3>

          <input name="name" placeholder="Full Name" onChange={onChange} />
          <input name="phone" placeholder="Phone Number" onChange={onChange} />
          <input name="city" placeholder="City" onChange={onChange} />
          <input name="pincode" placeholder="Pincode" onChange={onChange} />

          <textarea
            name="address"
            placeholder="Full Address"
            onChange={onChange}
          />
        </div>

        {/* 🧾 Summary */}
        <div className="summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>₹{item.price} × {item.quantity}</span>
            </div>
          ))}

          <hr />
          <h3>Total: ₹{total}</h3>
        </div>

      </div>

      {/* 💳 Place Order */}
      <button className="pay-btn" onClick={handleOrder}>
        Place Order ₹{total}
      </button>
    </div>
  );
}

export default Checkout;