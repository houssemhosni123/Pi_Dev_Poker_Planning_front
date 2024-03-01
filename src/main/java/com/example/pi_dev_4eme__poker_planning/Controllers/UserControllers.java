package com.example.pi_dev_4eme__poker_planning.Controllers;


import com.example.pi_dev_4eme__poker_planning.Entities.Tache;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import com.example.pi_dev_4eme__poker_planning.Services.TacheServices;
import com.example.pi_dev_4eme__poker_planning.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
public class UserControllers {
    @Autowired
    UserServices Uservice;

    @GetMapping("/GetUser/{userId}")
    User getUserById(@PathVariable Long userId) {
        return Uservice.getUserById(userId);
    }
    @GetMapping("/GetUsers/")
    List<User> ShowAllUsers()
    {
        return Uservice.ShowAllUsers();
    }
    @PutMapping("/UpdateUser/{userId}")
    public User updateUserById(@PathVariable Long userId, @RequestBody User updatedUser) {
        return Uservice.updateUserById(userId, updatedUser);
    }
}
