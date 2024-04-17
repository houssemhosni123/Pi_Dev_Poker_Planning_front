package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.User;
import com.example.pi_dev_4eme__poker_planning.Repositories.ReclamationRepositories;
import com.example.pi_dev_4eme__poker_planning.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RecalamtionparUser {
    @Autowired
    private ReclamationRepositories reclamationRepository;
    @Autowired
    UserRepository userRepository ;

    public Map<String, String> genererStatistiques() {
        Map<String, String> statistiques = new HashMap<>();

        List<Object[]> results = userRepository.findNomAndPrenom();

        for (Object[] result : results) {
            String nom = (String) result[0];
            String prenom = (String) result[1];
            Long nombreReclamations = reclamationRepository.countReclamationsByUserNomAndPrenom(nom, prenom);
            statistiques.put(nom + " " + prenom, String.valueOf(nombreReclamations));
        }

        return statistiques;
    }
}
