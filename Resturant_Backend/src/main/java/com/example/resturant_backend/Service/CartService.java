package com.example.resturant_backend.Service;

import com.example.resturant_backend.Model.Cart;
import com.example.resturant_backend.Model.Food;
import com.example.resturant_backend.Model.User;
import com.example.resturant_backend.Repository.CartRepository;
import com.example.resturant_backend.Repository.FoodRepository;
import com.example.resturant_backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private FoodRepository foodRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartRepository cartRepository;

    public Cart addTocart(int foodId, int userId) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));
        Food food = foodRepository.findById(foodId)
                .orElseThrow(()-> new RuntimeException("Food not found"));
        Optional<Cart> existingCart = cartRepository.findByUserAndFood(user, food);

        if (existingCart.isPresent()) {
            Cart cart = existingCart.get();
            cart.setQuantity(cart.getQuantity() + cart.getQuantity());
            return cartRepository.save(cart);
        }

        Cart cart = new Cart();
        cart.setUser(user);
        cart.setFood(food);
        cart.setQuantity(cart.getQuantity());
        return cartRepository.save(cart);
    }

    public List<Cart> getCart() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = userRepository.findByEmail(email).get();
        return cartRepository.findByUser(user);

    }

    public void deleteById(int id){
        cartRepository.deleteById(id);
    }
}
