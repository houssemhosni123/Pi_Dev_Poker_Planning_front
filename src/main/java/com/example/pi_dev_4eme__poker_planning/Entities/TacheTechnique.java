package com.example.pi_dev_4eme__poker_planning.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class TacheTechnique implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTacheTechnique;  // Identifiant unique de la tâche technique

    private String nomTacheTechnique;  // Nom ou description de la tâche technique
    private String descriptionTacheTechnique;  // Description détaillée de la tâche technique

    @ManyToOne
    @JoinColumn(name = "user_story_id")
    private UserStory userStory;  // User story liée à la tâche technique
    private Date dateCreation;  // Date de création de la tâche technique
    private Date dateModification;  // Date de la dernière modification de la tâche technique



}
