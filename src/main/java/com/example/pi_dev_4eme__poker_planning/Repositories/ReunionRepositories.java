package com.example.pi_dev_4eme__poker_planning.Repositories;

import com.example.pi_dev_4eme__poker_planning.Entities.Reunion;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ReunionRepositories extends JpaRepository<Reunion,Long> {
    @Query("SELECT r.titre_Reunion FROM Reunion r")
    List<String> findAllTitres();
    @Query("SELECT r FROM Reunion r WHERE r.titre_Reunion = :titre")

    Reunion findReunionByTitre(@Param("titre") String titre);
      @Query("SELECT r FROM Reunion r JOIN r.users u " +
            "WHERE u = :user " +
            "AND r.DateDebut_Reunion BETWEEN :startDateTime AND :endDateTime")
    List<Reunion> findReunionsByUserAndDateDebutReunionBetween(@Param("user") User user,
                                                               @Param("startDateTime") LocalDateTime startDateTime,
                                                               @Param("endDateTime") LocalDateTime endDateTime);
    @Query("SELECT DISTINCT r FROM Reunion r JOIN FETCH r.users WHERE r.DateDebut_Reunion BETWEEN :debut AND :fin")
    List<Reunion> findReunionsBetweenDateTime(@Param("debut") LocalDateTime debut, @Param("fin") LocalDateTime fin);

}