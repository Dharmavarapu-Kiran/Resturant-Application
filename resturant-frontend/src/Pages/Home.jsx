import React from 'react'
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";
import FoodList from "../components/FoodList";

function Home() {
  return (
    <div>
        <NavBar />
        <Slider />
        <CategoryList />
        <FoodList />
        

    </div>
  )
}

export default Home