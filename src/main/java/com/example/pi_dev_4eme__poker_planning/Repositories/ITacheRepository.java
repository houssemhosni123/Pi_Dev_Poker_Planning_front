package com.example.pi_dev_4eme__poker_planning.Repositories;

import com.example.pi_dev_4eme__poker_planning.Entities.Tache;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITacheRepository extends JpaRepository<Tache,Long> {

    Tache findTachesByIdTache(long idtache);
}
