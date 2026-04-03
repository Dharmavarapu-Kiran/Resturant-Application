package com.example.resturant_backend.Service;

import com.example.resturant_backend.Model.Cart;
import com.example.resturant_backend.Model.Order;
import com.example.resturant_backend.Model.OrderItem;
import com.example.resturant_backend.Model.User;
import com.example.resturant_backend.Repository.CartRepository;
import com.example.resturant_backend.Repository.OrderItemRepository;
import com.example.resturant_backend.Repository.OrderRepository;
import com.example.resturant_backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    public Order placeOrder() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Cart> cartItems = cartRepository.findByUser(user);

        if (cartItems.isEmpty()) {
            throw new RuntimeException("No cart found");
        }
        Order order = new Order();
        order.setUser(user);
        order.setStatus("Success");
        order.setCreatedAt(LocalDateTime.now());
        orderRepository.save(order);

        double total = 0;

        for (Cart cart : cartItems) {
            double price = cart.getFood().getPrice() * cart.getQuantity();
            total += price;

            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setFood(cart.getFood());
            item.setQuantity(cart.getQuantity());
            item.setPrice(price);

            orderItemRepository.save(item);
        }

        order.setTotalPrice(total);
        orderRepository.save(order);

        cartRepository.deleteAll(cartItems);
        return order;
    }
}
