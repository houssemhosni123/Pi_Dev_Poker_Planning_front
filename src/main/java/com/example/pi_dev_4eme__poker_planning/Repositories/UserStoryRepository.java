package com.example.pi_dev_4eme__poker_planning.Repositories;

import com.example.pi_dev_4eme__poker_planning.Entities.TacheTechnique;
import com.example.pi_dev_4eme__poker_planning.Entities.UserStory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserStoryRepository extends JpaRepository<UserStory, Long> {
}