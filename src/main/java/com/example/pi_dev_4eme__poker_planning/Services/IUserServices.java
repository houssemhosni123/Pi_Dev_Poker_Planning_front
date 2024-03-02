package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.Tache;
import com.example.pi_dev_4eme__poker_planning.Entities.User;

import java.util.List;

public interface IUserServices {
    List<User> ShowAllUsers();
    User getUserById(Long userId); // Method to get a user by ID
    User updateUserById(Long userId, User updatedUser); // Method to update a user by ID
    void activateUserById(Long userId);

    // Custom method to change user status to inactive
    void deactivateUserById(Long userId);
}
