package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.TacheTechnique;

import java.util.List;

public interface ITacheTechniqueServices {
    TacheTechnique updateTacheTechnique(Long id, TacheTechnique tacheTechnique);
    List<TacheTechnique> getAllTacheTechniques();
    TacheTechnique getTacheTechniqueById(Long id);
    void deleteTacheTechnique(Long id);
    TacheTechnique affecterTacheTechnique(Long userStoryId, TacheTechnique tacheTechnique);
    TacheTechnique createTacheTechnique(TacheTechnique tacheTechnique) ;
    void unassignTacheTechnique(Long tacheTechniqueId);
}