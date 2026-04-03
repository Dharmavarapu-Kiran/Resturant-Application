package com.example.resturant_backend.Service;

import com.example.resturant_backend.Model.Category;
import com.example.resturant_backend.Model.Food;
import com.example.resturant_backend.Repository.CategoryRepository;
import com.example.resturant_backend.Repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Food AddFood(Food food){
        Category category = categoryRepository.findById(food.getCategory().getId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        food.setCategory(category);

        return foodRepository.save(food);
    }

   public List<Food> GetAllFoods(){
        return foodRepository.findAll();
   }
    public List<Food> getFoodsByCategory(String name) {
        return foodRepository.findByCategoryName(name);
    }
}
