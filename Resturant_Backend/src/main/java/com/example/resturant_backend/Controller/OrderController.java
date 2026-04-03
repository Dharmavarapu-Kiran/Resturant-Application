package com.example.resturant_backend.Controller;

import com.example.resturant_backend.Model.Order;
import com.example.resturant_backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/place")
    public Order PlaceOrder(){
        return orderService.placeOrder();
    }
}
