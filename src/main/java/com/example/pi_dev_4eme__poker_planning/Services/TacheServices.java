package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.Projet;
import com.example.pi_dev_4eme__poker_planning.Entities.Tache;
import com.example.pi_dev_4eme__poker_planning.Entities.User;
import com.example.pi_dev_4eme__poker_planning.Repositories.IProjetRepository;
import com.example.pi_dev_4eme__poker_planning.Repositories.ITacheRepository;
import com.example.pi_dev_4eme__poker_planning.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TacheServices implements ITacheServices {
    @Autowired
    ITacheRepository TRepository;
    @Autowired
    UserRepository userRepositories;
    @Autowired
    IProjetRepository projetRepositories;

    @Override
    public void addTache(Tache tache, Long idUser, int idprojet) {
        User user = userRepositories.findById(idUser).orElse(null);
        Projet projet = projetRepositories.findById(idprojet).orElse(null);
        tache.setUser(user);
        tache.setProjet(projet);
        TRepository.save(tache);
    }

    @Override
    public Tache UpdateTache(Tache tache, long idtache) {
        tache =TRepository.findTachesByIdTache(idtache);
        return TRepository.save(tache);
    }

    @Override
    public List<Tache> ShowTache() {
        return TRepository.findAll();
    }

    @Override
    public void DeleteTache(Tache tache, long idtache) {
        tache =TRepository.findTachesByIdTache(idtache);
        TRepository.delete(tache);

    }
}
