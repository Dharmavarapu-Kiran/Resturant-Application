import React, { useEffect, useState } from "react";
import "../styles/Slider.css";

const images = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">

      <img src={images[index]} alt="food" />

      {/* Overlay */}
      <div className="overlay">
        <h1>Welcome to Foody 🍽️</h1>
        <p>Delicious food, delivered fast</p>
      </div>

    </div>
  );
}

export default Slider;