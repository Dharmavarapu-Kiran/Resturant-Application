package com.example.resturant_backend.Service;

import com.example.resturant_backend.DTO.AuthDTO;
import com.example.resturant_backend.DTO.LoginDTO;
import com.example.resturant_backend.DTO.RegisterDTO;
import com.example.resturant_backend.Model.User;
import com.example.resturant_backend.Repository.UserRepository;
import com.example.resturant_backend.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthDTO register(RegisterDTO dto) {
        if(userRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
 userRepository.save(user);

 return new AuthDTO(null, "Registered Successfully");


    }

    public AuthDTO login(LoginDTO dto) {

        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(dto.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        String token = jwtUtil.generateToken(user.getEmail());

        return new AuthDTO(token, "Login Successful");
    }

}
