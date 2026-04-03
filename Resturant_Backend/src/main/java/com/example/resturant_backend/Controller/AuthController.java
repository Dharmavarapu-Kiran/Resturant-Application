package com.example.resturant_backend.Controller;

import com.example.resturant_backend.DTO.AuthDTO;
import com.example.resturant_backend.DTO.LoginDTO;
import com.example.resturant_backend.DTO.RegisterDTO;
import com.example.resturant_backend.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public AuthDTO register(@RequestBody RegisterDTO dto) {
        return authService.register(dto);
    }

    @PostMapping("/login")
    public AuthDTO login(@RequestBody LoginDTO dto) {
        return authService.login(dto);
    }
}
