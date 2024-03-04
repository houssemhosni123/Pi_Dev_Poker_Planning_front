package com.example.pi_dev_4eme__poker_planning.Repositories;

import com.example.pi_dev_4eme__poker_planning.Entities.Projet;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProjetRepository extends JpaRepository<Projet, Integer> {
    Projet findByIdProjet(long idprojet);
}
