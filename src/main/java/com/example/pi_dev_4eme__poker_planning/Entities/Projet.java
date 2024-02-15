package com.example.pi_dev_4eme__poker_planning.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Projet implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int idProjet;
    String Nom_Projet;
    String Description_Projet;
    Date DateDebut_Projet;
    Date DateFin_Projet;


    @OneToMany(mappedBy = "projet",cascade = CascadeType.ALL)
    private List<Tache> taches;

    @OneToMany(mappedBy = "projet",cascade = CascadeType.ALL)
    Set<UserStory> userStory;

   /* @ManyToMany(mappedBy = "projets",cascade = CascadeType.ALL)
    Set<User> Users;*/
}
