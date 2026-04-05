import React from 'react'
import "../styles/FoodCard.css";

function FoodCard({food,addToCart}) {
  return (
    <div className='food-card'>
        <img src={food.imageUrl} alt={food.name} />
        <div className='food-info'>
            
            <h3>{food.name}</h3>
            <p className='Description'>{food.description}</p>
            <p className='price'>₹{food.price}</p>

            <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>

    </div>
  )
}

export default FoodCard