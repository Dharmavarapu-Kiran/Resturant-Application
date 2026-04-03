package com.example.resturant_backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.webmvc.autoconfigure.WebMvcProperties;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Cart {
    @Id
    private int id;

    @ManyToOne
    private User user;
    @ManyToOne
    private Food food;

    private int quantity;
    
}
