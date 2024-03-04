package com.example.pi_dev_4eme__poker_planning.Controllers;


import com.example.pi_dev_4eme__poker_planning.Entities.Tache;
import com.example.pi_dev_4eme__poker_planning.Services.TacheServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Tache")
public class TacheController
{
    @Autowired
    TacheServices Tservice;
    @PutMapping("/ajouterTache/{idU}/{idP}")
    public void  addReclamtion(@RequestBody Tache tache,@PathVariable("idU") Long idUser,@PathVariable("idP") int idprojet) {

        Tservice.addTache(tache,idUser,idprojet);
    }

    @GetMapping("/GetTache/")
    List<Tache> ShowAllTache()
    {
        return Tservice.ShowTache();
    }
    @PutMapping("/Updatetache/{id}")
    Tache UpdateTache(@RequestBody Tache tache, @PathVariable("id") long idtache) {
        return Tservice.UpdateTache(tache,idtache);
    }

    @DeleteMapping("/Deletetache/{id}")
    void DeleteIteration(@RequestBody Tache tache, @PathVariable("id") long idtache)
    {
        Tservice.DeleteTache(tache, idtache);

    }
}
