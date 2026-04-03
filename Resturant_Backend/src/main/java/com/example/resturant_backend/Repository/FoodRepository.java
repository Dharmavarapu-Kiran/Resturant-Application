package com.example.resturant_backend.Repository;

import com.example.resturant_backend.Model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Integer> {
    List<Food> findByCategoryName(String name);
}
