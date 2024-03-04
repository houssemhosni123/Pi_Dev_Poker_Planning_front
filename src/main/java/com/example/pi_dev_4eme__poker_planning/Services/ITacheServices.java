package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.Tache;

import java.util.List;

public interface ITacheServices {
    public void addTache (Tache tache , Long idUser , int idprojet);
    Tache UpdateTache(Tache tache, long idtache);

    List<Tache> ShowTache();
    void DeleteTache(Tache tache,long idtache);

}
