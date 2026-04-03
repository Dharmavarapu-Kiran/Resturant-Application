package com.example.resturant_backend.Repository;

import com.example.resturant_backend.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
}
