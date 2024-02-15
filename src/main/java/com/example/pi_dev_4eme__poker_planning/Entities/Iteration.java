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
public class Iteration implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idIteration;

    private String resultat;

    private Date date_Iteration;
    @OneToOne
    private Chat chat;


    @OneToMany(mappedBy = "iteration",cascade = CascadeType.ALL)
    private List<Estimation> Estimations;

    //hethy fil entites Iteration
    @ManyToOne
    Session session;

}

