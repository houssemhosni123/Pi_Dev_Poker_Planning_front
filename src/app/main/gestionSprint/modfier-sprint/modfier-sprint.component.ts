// update-sprint.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SprintService } from '../../../Services/gestionSprintServices/SprintService';


@Component({
  selector: 'app-modifier-sprint',
  templateUrl: './modfier-sprint.component.html',
  styleUrls: ['./modfier-sprint.component.scss']
})
export class ModfierSprintComponent implements OnInit {
  updateForm: FormGroup;
  sprintId: number;
  sprintDetails: any;
  sprintUpdatedSuccessfully: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private sprintService: SprintService
  ) {}

  ngOnInit() {
    this.sprintId = +this.route.snapshot.paramMap.get('id');
    this.initForm();

    this.sprintService.getSprintById(this.sprintId).subscribe(
      (sprintDetails) => {
        this.sprintDetails = sprintDetails;
        this.updateForm.patchValue({
          nomSprint: this.sprintDetails.nomSprint,
          objectifSprint: this.sprintDetails.objectifSprint,
          dateDebutSprint: this.sprintDetails.dateDebutSprint,
          dateFinSprint: this.sprintDetails.dateFinSprint,
          etatSprint: this.sprintDetails.etatSprint,
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des détails du sprint :', error);
      }
    );
  }

  initForm() {
    this.updateForm = this.formBuilder.group({
      nomSprint: [''],
      objectifSprint: [''],
      dateDebutSprint: [''],
      dateFinSprint: [''],
      etatSprint: [''],
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updatedSprint = {
        idSprint: this.sprintId,
        nomSprint: this.updateForm.value.nomSprint,
        objectifSprint: this.updateForm.value.objectifSprint,
        dateDebutSprint: this.updateForm.value.dateDebutSprint,
        dateFinSprint: this.updateForm.value.dateFinSprint,
        etatSprint: this.updateForm.value.etatSprint,
      };

      this.sprintService.updateSprint(updatedSprint.idSprint, updatedSprint).subscribe(
        () => {
          console.log('Sprint mis à jour avec succès !');
          
          this.sprintUpdatedSuccessfully = true;
          setTimeout(() => {
            this.sprintUpdatedSuccessfully = false;
            this.router.navigate(['AfficherSprint']);
          }, 500);

          // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires après la mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du sprint :', error);
        }
      );
    }
  }
}

