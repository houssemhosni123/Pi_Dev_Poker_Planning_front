// ajout-sprint-backlog.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SprintBacklogService } from '../../../Services/gestionSprintBacklogServices/SprintBacklogServices';
import { SprintService } from '../../../Services/gestionSprintServices/SprintService';
import { SprintBacklog } from '../../apps/model/sprintBacklog';

@Component({
  selector: 'app-ajout-sprint-backlog',
  templateUrl: './ajouter-sprint-backlog.component.html',
  styleUrls: ['./ajouter-sprint-backlog.component.scss']
})
export class AjoutSprintBacklogComponent implements OnInit {
  ajoutForm: FormGroup;
  sprints: any[];

  constructor(
    private formBuilder: FormBuilder,
    private sprintBacklogService: SprintBacklogService,
    private sprintService: SprintService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadSprints();
  }

  loadSprints(): void {
    this.sprintService.getAllSprints().subscribe(
      (data: any[]) => {
        this.sprints = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des Sprints :', error);
      }
    );
  }

  initForm() {
    this.ajoutForm = this.formBuilder.group({
      effortEstimation: ['', Validators.required],
      definitionOfDone: ['', Validators.required],
      priorite: ['', Validators.required],
     // estTermine: [false],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      sprintId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ajoutForm.valid) {
      const newSprintBacklog: SprintBacklog = this.ajoutForm.value;
      this.sprintBacklogService.createSprintBacklog(newSprintBacklog).subscribe(
        (createdSprintBacklog) => {
          console.log('Sprint Backlog ajouté avec succès :', createdSprintBacklog);

          // Affecter le Sprint Backlog au Sprint sélectionné
          const selectedSprintId: number = this.ajoutForm.get('sprintId').value;
          this.sprintBacklogService.assignSprintToSprintBacklog(createdSprintBacklog.idSprintBacklog, selectedSprintId).subscribe(
            (result) => {
              console.log('Sprint Backlog affecté au Sprint avec succès :', result);
            },
            (error) => {
              console.error('Erreur lors de l\'affectation du Sprint Backlog au Sprint :', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du Sprint Backlog :', error);
        }
      );
    }
  }
}
