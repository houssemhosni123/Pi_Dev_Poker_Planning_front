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
public class Reclamation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idReclamation;
    String titre_Reclamation;
    String contenu_Reclamation;
    Date dateSoumission;
    @ManyToOne
    @JoinColumn(name = "idUser",referencedColumnName = "idUser",
            insertable = false,updatable = false)
    User userReclamer;

    @ManyToOne
    @JoinColumn(name = "idReunion" ,referencedColumnName = "idReunion",
            insertable = false,updatable = false)
    Reunion reunionReclamer;
}
