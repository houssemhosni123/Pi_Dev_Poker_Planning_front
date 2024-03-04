package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Controllers.ChangePasswordRequest;
import com.example.pi_dev_4eme__poker_planning.Entities.Role;
import com.example.pi_dev_4eme__poker_planning.Entities.StatusUser;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import com.example.pi_dev_4eme__poker_planning.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@RequiredArgsConstructor
@Service
public class UserServices implements IUserServices{
    @Autowired
    UserRepository userRepositories;
    private final PasswordEncoder passwordEncoder;
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
    public int countActiveUsers() {
        return userRepositories.countUsersByStatus(StatusUser.active);
    }

    public int countInactiveUsers() {
        return userRepositories.countUsersByStatus(StatusUser.inactive);
    }

    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        userRepositories.save(user);
    }
}
