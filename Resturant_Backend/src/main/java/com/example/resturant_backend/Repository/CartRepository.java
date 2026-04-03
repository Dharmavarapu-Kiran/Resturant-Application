package com.example.resturant_backend.Repository;

import com.example.resturant_backend.Model.Cart;
import com.example.resturant_backend.Model.Food;
import com.example.resturant_backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findByUser(User user);
    Optional<Cart> findByUserAndFood(User user, Food food);
}
