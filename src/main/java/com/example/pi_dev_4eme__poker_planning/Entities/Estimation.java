package com.example.pi_dev_4eme__poker_planning.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Estimation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Estimation;

    private int valeur;




    @ManyToOne
    @JoinColumn(name="idIteration",referencedColumnName = "idIteration",
            insertable = false,updatable = false)
    private Iteration iteration;


    @ManyToOne
    @JoinColumn(name="idUser",referencedColumnName = "idUser",
            insertable = false,updatable = false)

    private User user;
}
