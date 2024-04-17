package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Repositories.ITacheRepository;
import com.example.pi_dev_4eme__poker_planning.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TacheServices  {
    @Autowired
    ITacheRepository TRepository;
    @Autowired
    UserRepository userRepositories;


   /* @Override
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

    }*/
}
