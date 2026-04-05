import React from "react";
import "../styles/CategoryList.css";
import { useNavigate } from "react-router-dom"; // ✅ added

const categories = [
  {
    name: "Biryani",
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
  },
  {
    name: "Starters",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
  },
  {
    name: "Main Course",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    name: "Desserts",
    img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
  },
  {
    name: "Drinks",
    img: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
  }
];

function CategoryList() {
  const navigate = useNavigate(); // ✅ added

  return (
    <div className="category-section">

      <h2>Categories</h2>

      <div className="category-container">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="category-card"
            onClick={() => navigate(`/category/${cat.name}`)} // ✅ added
          >
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CategoryList;