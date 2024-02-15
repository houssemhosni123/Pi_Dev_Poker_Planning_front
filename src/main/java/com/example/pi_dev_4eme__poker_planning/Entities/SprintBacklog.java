package com.example.pi_dev_4eme__poker_planning.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class SprintBacklog implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSprintBacklog;
    private String userStory;
    private int effortEstimation;
    private String definitionOfDone;
    private int priorite;
    private boolean estTermine;
    private Date dateDebut;
    private Date dateFin;

    @ManyToOne
    @JoinColumn(name = "sprint_id")
    private Sprint sprint;

   @OneToMany(mappedBy = "sprintBacklog",cascade = CascadeType.ALL)
    private List<UserStory> UserStorys;
}