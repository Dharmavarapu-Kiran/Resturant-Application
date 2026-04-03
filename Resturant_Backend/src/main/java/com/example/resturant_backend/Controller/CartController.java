package com.example.resturant_backend.Controller;

import com.example.resturant_backend.Model.Cart;
import com.example.resturant_backend.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    CartService cartService;

   @PostMapping("/add")
    public Cart addToCart(@RequestParam int foodId,
                          @RequestParam int quantity){
       return cartService.addTocart(foodId,quantity);
   }
@GetMapping
    public List<Cart> findAll(){
       return cartService.getCart();
}

@DeleteMapping("/{id}")
public String deleteCart(@PathVariable int id){
       cartService.deleteById(id);
       return "Cart deleted";
}
}
