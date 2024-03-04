// modfier-sprint-backlog.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintBacklogService } from '../../../Services/gestionSprintBacklogServices/SprintBacklogServices';
import { SprintService } from '../../../Services/gestionSprintServices/SprintService';

@Component({
  selector: 'app-modfier-sprint-backlog',
  templateUrl: './modfier-sprint-backlog.component.html',
  styleUrls: ['./modfier-sprint-backlog.component.scss']
})
export class ModfierSprintBacklogComponent implements OnInit {
  sprintBacklogId: number;
  sprintBacklogForm: FormGroup;
  sprintBacklogUpdatedSuccessfully: boolean = false;
  sprints: any[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sprintBacklogService: SprintBacklogService,
    private sprintService: SprintService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      this.sprintBacklogId = +params['id'];
      this.loadSprintBacklog();
      this.loadSprints();
    });
  }

  initForm(): void {
    this.sprintBacklogForm = this.formBuilder.group({
      effortEstimation: [''],
      definitionOfDone: [''],
      priorite: [''],
      estTermine: [false],
      dateDebut: [null],
      dateFin: [null],
      sprintId: [null],
    });
  }

  loadSprintBacklog(): void {
    this.sprintBacklogService.getSprintBacklogById(this.sprintBacklogId).subscribe(
      (sprintBacklog) => {
        this.sprintBacklogForm.patchValue({
          effortEstimation: sprintBacklog.effortEstimation,
          definitionOfDone: sprintBacklog.definitionOfDone,
          priorite: sprintBacklog.priorite,
          estTermine: sprintBacklog.estTermine,
          dateDebut: sprintBacklog.dateDebut,
          dateFin: sprintBacklog.dateFin,
          sprintId: sprintBacklog.idSprint,
        });
      },
      (error) => {
        console.error('Erreur lors du chargement du Sprint Backlog :', error);
      }
    );
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

  onSubmit(): void {
    if (this.sprintBacklogForm.valid) {
      // Récupérez l'ID du sprint actuel avant la modification
      const sprintBacklogBeforeUpdate: any = this.sprintBacklogService.getSprintBacklogById(this.sprintBacklogId);

      // Envoyez la mise à jour au service
      this.sprintBacklogService.updateSprintBacklog(this.sprintBacklogId, this.sprintBacklogForm.value).subscribe(
        () => {
          console.log('Sprint Backlog mis à jour avec succès !');

          // Récupérez l'ID du nouveau sprint après la modification
          const selectedSprintId: number = this.sprintBacklogForm.get('sprintId').value;

          // Désaffectez le sprintBacklog du sprint actuel
          this.sprintBacklogService.unassignSprintFromSprintBacklog(this.sprintBacklogId).subscribe(
            () => {
              console.log('Sprint Backlog désaffecté avec succès du Sprint actuel.');

              // Affectez le sprintBacklog au nouveau sprint
              this.sprintBacklogService.assignSprintToSprintBacklog(this.sprintBacklogId, selectedSprintId).subscribe(
                () => {
                  console.log('Sprint Backlog affecté avec succès au nouveau Sprint.');
                  // Redirigez vers la liste des Sprint Backlogs après la mise à jour
                  this.sprintBacklogUpdatedSuccessfully = true;
                  setTimeout(() => {
                    this.sprintBacklogUpdatedSuccessfully = false;  
                    this.router.navigate(['/AfficherSprintBacklog']);
                  }, 500);
                },
                (error) => {
                  console.error('Erreur lors de l\'affectation du Sprint Backlog au nouveau Sprint :', error);
                }
              );
            },
            (error) => {
              console.error('Erreur lors de la désaffectation du Sprint Backlog du Sprint actuel :', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du Sprint Backlog :', error);
        }
      );
    }
  }
}
