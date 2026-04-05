import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../Services/api";
import FoodCard from "../components/FoodCard";
import "../styles/FoodList.css";

function CategoryPage() {
  const { name } = useParams();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    API.get(`/foods/category/${name}`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.error(err));
  }, [name]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{name}</h2>

      <div className="food-list">
        {foods.length === 0 ? (
          <p>No items found</p>
        ) : (
          foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;