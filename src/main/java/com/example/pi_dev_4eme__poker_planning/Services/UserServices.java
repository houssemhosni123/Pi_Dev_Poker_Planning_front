package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.Role;
import com.example.pi_dev_4eme__poker_planning.Entities.StatusUser;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import com.example.pi_dev_4eme__poker_planning.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserServices implements IUserServices{
    @Autowired
    UserRepository userRepositories;

    @Override
    public List<User> ShowAllUsers() {
        return userRepositories.findAll() ;
    }


    @Override
    public User getUserById(Long userId) {
        return userRepositories.findById(userId).orElse(null);
    }

    @Override
    public User updateUserById(Long userId, User updatedUser) {
        Optional<User> userOptional = userRepositories.findById(userId);
        if (userOptional.isPresent()) {
            User existingUser = userOptional.get();
            // Update user information with the provided values
            existingUser.setNom(updatedUser.getNom());
            existingUser.setPrenom(updatedUser.getPrenom());
            existingUser.setTel(updatedUser.getTel());

            existingUser.setEmail(updatedUser.getEmail());
            // You can update other fields as needed

            // Save the updated user information
            return userRepositories.save(existingUser);
        }
        return null; // Return null if user with given ID is not found
    }



    @Override
    public void activateUserById(Long userId) {
        // Retrieve user by ID
        Optional<User> userOptional = userRepositories.findById(userId);
        // If user exists, set the status to active and save
        userOptional.ifPresent(user -> {
            user.setStatus(StatusUser.active);
            userRepositories.save(user);
        });
    }
    @Override
    public void deactivateUserById(Long userId) {
        // Retrieve user by ID
        Optional<User> userOptional = userRepositories.findById(userId);
        // If user exists, set the status to inactive and save
        userOptional.ifPresent(user -> {
            user.setStatus(StatusUser.inactive);
            userRepositories.save(user);
        });
    }

    public int countScrumMasters() {
        return userRepositories.countUsersByRole(Role.ScrumMaster);
    }

    public int countDevelopers() {
        return userRepositories.countUsersByRole(Role.developer);
    }

    public int countProductOwners() {
        return userRepositories.countUsersByRole(Role.ProductOwner);
    }


}
