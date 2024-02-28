import { Component, OnInit } from '@angular/core';
import { SprintService } from '../../../Services/gestionSprintServices/SprintService';
import { Sprint } from 'app/main/apps/model/sprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-sprint',
  templateUrl: './afficher-sprint.component.html',
  styleUrls: ['./afficher-sprint.component.scss']
})
export class AfficherSprintComponent implements OnInit {
  sprints: Sprint[];

  constructor(private sprintService: SprintService, private router: Router) {}

  ngOnInit(): void {

    this.sprintService.getAllSprints().subscribe(
      (data) => {
        this.sprints = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des Sprints :', error);
      }
    );  
    this.chargerSprints();

  }
  

  chargerSprints(): void {
    this.sprintService.getAllSprints().subscribe(
      (sprints) => {
        this.sprints = sprints;
      },
      (erreur) => {
        console.error('Erreur lors du chargement des sprints :', erreur);
      }
    );
  }

  ouvrirFormulaireUpdate(sprintId: number): void {
    this.router.navigate(['/sprints', sprintId, 'update']);
  }

  supprimerSprint(sprintId: number): void {
    this.sprintService.deleteSprint(sprintId).subscribe(
      () => {
        console.log('Sprint supprimé avec succès !');
        this.chargerSprints();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression du sprint :', erreur);
      }
    );
  }
  showSprintBacklogs(sprintId: number): void {
    this.router.navigate(['AfficherSprintBacklogs', sprintId]);
  }
}
