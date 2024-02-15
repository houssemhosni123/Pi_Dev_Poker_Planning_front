package com.example.pi_dev_4eme__poker_planning.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserStory implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int IdUserStory;
    String Titre_US;
    String Description_US;
    @Enumerated(EnumType.STRING)
    StatutUserStory Statut_US;
    int Velocite_US;

    @ManyToOne(cascade = CascadeType.ALL)
    Projet projet;
    @ManyToOne
    SprintBacklog sprintBacklog;

    @OneToMany(cascade = CascadeType.ALL)
    List<TacheTechnique> tacheTechniques;

   //hethy fil entites UserStory
    @ManyToOne
    Session session;

}
