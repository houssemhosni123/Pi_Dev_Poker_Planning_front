// ajout-sprint.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SprintService } from '../../../Services/gestionSprintServices/SprintService';
import { EtatSprint } from '../../apps/model/sprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-sprint',
  templateUrl: './ajouter-sprint.component.html',
  styleUrls: ['./ajouter-sprint.component.scss']
})



export class AjouterSprintComponent implements OnInit {

  
  
  sprintForm: FormGroup = this.fb.group({
    nomSprint: ['', [Validators.required]],
    objectifSprint: ['', [Validators.required]],
    dateDebutSprint: [null, Validators.required],
    dateFinSprint: [null, Validators.required],
    etatSprint: [EtatSprint.Planifié, Validators.required]
  });
  

 
  
  
  etatSprint = EtatSprint; // Pour accéder à l'enum dans le template

  constructor(private fb: FormBuilder, private sprintService: SprintService, private router: Router) {}

  ngOnInit(): void {
    
  }
  sprintAddedSuccessfully = false;

  redirigerVersListeSprints() {
    this.router.navigate(['AfficherSprint']);
  }

  onSubmit() {
    if (this.sprintForm.valid) {
      this.sprintService.createSprint(this.sprintForm.value).subscribe(() => {
        // Action après l'ajout du Sprint (par exemple, redirection ou actualisation de la liste)
      });
      this.sprintAddedSuccessfully = true;
      setTimeout(() => {
        this.sprintAddedSuccessfully = false;
      }, 3000);
    }
  }
}
