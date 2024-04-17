package com.example.pi_dev_4eme__poker_planning.Services;

import com.example.pi_dev_4eme__poker_planning.Entities.SprintBacklog;

import java.util.List;

public interface ISprintBacklogServices {
    SprintBacklog createSprintBacklog(SprintBacklog sprintBacklog);
    SprintBacklog updateSprintBacklog(Long id, SprintBacklog sprintBacklog);
    List<SprintBacklog> getAllSprintBacklogs();
    SprintBacklog getSprintBacklogById(Long id);
    void deleteSprintBacklog(Long id);

    void assignSprintToSprintBacklog(Long sprintBacklogId, Long sprintId);

    void unassignSprintFromSprintBacklog(Long sprintBacklogId);
    List<SprintBacklog> getSprintBacklogsBySprintId(Long sprintId) ;
    int getSprintProgression(Long sprintId);


}