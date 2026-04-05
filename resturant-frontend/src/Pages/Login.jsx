import React, { useState } from 'react';
import "../styles/Login.css";
import API from "../Services/api";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", user);
      localStorage.setItem("token", res.data.token);
    localStorage.setItem("email", user.email); 

      alert("Logged in successfully!");
      navigate("/");
      window.location.reload(); // 🔥 refresh navbar
    } catch (err) {
      console.error(err);
      alert("Invalid Credentials or User does not exist");
    }

  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p className="Login-btn" onClick={() => navigate("/register")}>
          Don’t have an account? Register
        </p>
      </form>
    </div>
  );
}

export default Login;