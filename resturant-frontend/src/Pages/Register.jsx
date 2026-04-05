import React, { useState } from 'react';
import "../styles/Register.css";
import API from "../Services/api";
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", user); // ✅ FIXED
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input 
          name="name" 
          placeholder="Name" 
          onChange={onInputChange} 
          required 
        />

        <input 
          name="email" 
          placeholder="Email" 
          onChange={onInputChange} 
          required 
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={onInputChange} 
          required 
        />

        <button type="submit">Register</button>

        <p className="Login-btn"onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}

export default Register;