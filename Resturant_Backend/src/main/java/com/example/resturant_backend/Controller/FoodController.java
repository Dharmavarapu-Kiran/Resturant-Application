package com.example.resturant_backend.Controller;

import com.example.resturant_backend.Model.Food;
import com.example.resturant_backend.Service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @PostMapping
    public Food AddFood(@RequestBody Food food){
        return foodService.AddFood(food);
    }

    @GetMapping
    public List<Food> GetAllFoods(){
        return foodService.GetAllFoods();
    }
    @GetMapping("/category/{name}")
    public List<Food> getFoodsByCategory(@PathVariable String name) {
        return foodService.getFoodsByCategory(name);
    }
}
