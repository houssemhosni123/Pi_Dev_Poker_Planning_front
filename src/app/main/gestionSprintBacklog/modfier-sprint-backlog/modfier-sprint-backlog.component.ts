


// modifier-sprint-backlog.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintBacklogService } from '../../../Services/gestionSprintBacklogServices/SprintBacklogServices';

@Component({
  selector: 'app-modfier-sprint-backlog',
  templateUrl: './modfier-sprint-backlog.component.html',
  styleUrls: ['./modfier-sprint-backlog.component.scss']
})
export class ModfierSprintBacklogComponent implements OnInit {
  sprintBacklogId: number;
  sprintBacklogForm: FormGroup;
  sprintBacklogUpdatedSuccessfully: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sprintBacklogService: SprintBacklogService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      this.sprintBacklogId = +params['id'];
      this.loadSprintBacklog();
    });
  }

  initForm(): void {
    this.sprintBacklogForm = this.formBuilder.group({
      effortEstimation: ['', Validators.required],
      definitionOfDone: ['', Validators.required],
      priorite: ['', Validators.required],
      estTermine: [false, Validators.required],
      dateDebut: [null, Validators.required],
      dateFin: [null, Validators.required],
      // Ajoutez d'autres champs du formulaire selon votre modèle
    });
  }

  loadSprintBacklog(): void {
    this.sprintBacklogService.getSprintBacklogById(this.sprintBacklogId).subscribe(
      (sprintBacklog) => {
        // Remplissez le formulaire avec les valeurs actuelles du Sprint Backlog
        this.sprintBacklogForm.patchValue({
          effortEstimation: sprintBacklog.effortEstimation,
          definitionOfDone: sprintBacklog.definitionOfDone,
          priorite: sprintBacklog.priorite,
          estTermine: sprintBacklog.estTermine,
          dateDebut: sprintBacklog.dateDebut,
          dateFin: sprintBacklog.dateFin,
          // Remplissez les autres champs du formulaire
        });
      },
      (error) => {
        console.error('Erreur lors du chargement du Sprint Backlog :', error);
      }
    );
  }

  onSubmit(): void {
    if (this.sprintBacklogForm.valid) {
      // Envoyez la mise à jour au service
      this.sprintBacklogService.updateSprintBacklog(this.sprintBacklogId, this.sprintBacklogForm.value).subscribe(
        () => {
          console.log('Sprint Backlog mis à jour avec succès !');
          // Redirigez vers la liste des Sprint Backlogs après la mise à jour
          setTimeout(() => {
          this.sprintBacklogUpdatedSuccessfully = true;
          this.router.navigate(['/AfficherSprintBacklog']);
        }, 500);

        },
        (error) => {
          console.error('Erreur lors de la mise à jour du Sprint Backlog :', error);
        }
      );
    
     
    }
  }
  
}
