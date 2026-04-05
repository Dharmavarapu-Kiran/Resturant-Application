import React, { useEffect, useState } from "react";
import API from "../Services/api";   // adjust path if needed
import FoodCard from "./FoodCard";
import "../styles/FoodList.css";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const addToCart = (food) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // check if already exists
  const existing = cart.find(item => item.id === food.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...food, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
};

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await API.get("/foods");
        setFoods(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load food items");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading foods...</h2>;
  }


  if (error) {
    return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;
  }


  if (foods.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No food available</h2>;
  }


  return (
    <div className="food-list">
      {foods.map((food) => (
       <FoodCard 
  key={food.id} 
  food={food} 
  addToCart={addToCart} 
/>
      ))}
    </div>
  );
};

export default FoodList;