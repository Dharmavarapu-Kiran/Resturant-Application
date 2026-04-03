package com.example.resturant_backend.Repository;

import com.example.resturant_backend.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
