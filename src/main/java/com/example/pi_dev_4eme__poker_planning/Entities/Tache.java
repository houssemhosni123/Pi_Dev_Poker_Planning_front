package com.example.pi_dev_4eme__poker_planning.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tache  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idTache ;
    private Date dateCreation;
    @Enumerated(EnumType.STRING)
    RoleProjet tacheProjet;

    @ManyToOne
    @JoinColumn(name="idProjet",referencedColumnName = "idProjet",
    insertable = true,updatable = false)
    private Projet projet;


    @ManyToOne
    @JoinColumn(name="idUser",referencedColumnName = "idUser",
            insertable = true,updatable = false)

    private User user;
}
