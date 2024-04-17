package com.example.pi_dev_4eme__poker_planning.Controllers;

import com.example.pi_dev_4eme__poker_planning.Entities.TacheTechnique;
import com.example.pi_dev_4eme__poker_planning.Services.TacheTechniqueServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/api/tacheTechniques")
public class TacheTechniqueController {

    @Autowired
    TacheTechniqueServiceImpl tacheTechniqueService;

    @PostMapping("/create")
    public ResponseEntity<TacheTechnique> createTacheTechnique(@RequestBody TacheTechnique tacheTechnique) {
        TacheTechnique createdTacheTechnique = tacheTechniqueService.createTacheTechnique(tacheTechnique);
        return new ResponseEntity<>(createdTacheTechnique, HttpStatus.CREATED);
    }

    @PostMapping("/assignToUserStory/{userStoryId}")
    public ResponseEntity<TacheTechnique> assignTacheTechniqueToUserStory(@PathVariable Long userStoryId,
                                                                          @RequestBody TacheTechnique tacheTechnique) {
        TacheTechnique assignedTacheTechnique = tacheTechniqueService.affecterTacheTechnique(userStoryId, tacheTechnique);
        return new ResponseEntity<>(assignedTacheTechnique, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TacheTechnique> updateTacheTechnique(@PathVariable Long id,
                                                               @RequestBody TacheTechnique tacheTechnique) {
        TacheTechnique updatedTacheTechnique = tacheTechniqueService.updateTacheTechnique(id, tacheTechnique);
        return new ResponseEntity<>(updatedTacheTechnique, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<TacheTechnique>> getAllTacheTechniques() {
        List<TacheTechnique> tacheTechniques = tacheTechniqueService.getAllTacheTechniques();
        return new ResponseEntity<>(tacheTechniques, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TacheTechnique> getTacheTechniqueById(@PathVariable Long id) {
        TacheTechnique tacheTechnique = tacheTechniqueService.getTacheTechniqueById(id);
        return new ResponseEntity<>(tacheTechnique, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTacheTechnique(@PathVariable Long id) {
        tacheTechniqueService.deleteTacheTechnique(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{tacheTechniqueId}/unassign")
    public ResponseEntity<String> unassignTacheTechnique(@PathVariable Long tacheTechniqueId) {
        try {
            tacheTechniqueService.unassignTacheTechnique(tacheTechniqueId);
            return ResponseEntity.ok("TacheTechnique désaffectée avec succès.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/searchAdvanced")
    public List<TacheTechnique> searchAdvanced(@RequestParam String query) {
        return tacheTechniqueService.searchAdvanced(query);
    }
}