import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(cart.length);
}, []);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='navbar'>

      <h2 className='logo' onClick={() => navigate("/")}>Foody</h2>

      <div className='nav-links'>
        <span onClick={() => navigate("/")}>Home</span>
      <span onClick={() => navigate("/cart")} className="cart-icon">
  Cart 🛒
  {cartCount > 0 && <span className="badge">{cartCount}</span>}
</span>

        {!token ? (
          <>
            <span onClick={() => navigate("/login")}>Login</span>
            <span onClick={() => navigate("/register")}>Register</span>
          </>
        ) : (
          <div className="profile" ref={dropdownRef}>
            <span onClick={() => setOpen(!open)}>👤</span>

            {open && (
              <div className="dropdown">
                <p className="email">{email || "User"}</p>

                <p onClick={() => navigate("/address")}>Address</p>
                <p onClick={() => navigate("/orders")}>Orders</p>
                <p onClick={() => navigate("/support")}>Customer Support</p>

                <hr />

                <p onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                  window.location.reload(); // 🔥 refresh navbar
                }}>
                  Logout
                </p>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export default NavBar;