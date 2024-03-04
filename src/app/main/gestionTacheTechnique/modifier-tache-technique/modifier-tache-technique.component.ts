// modifier-tache-technique.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheTechniqueService } from '../../../Services/gestionTacheTechnique/TacheTechniqueService';

@Component({
  selector: 'app-modifier-tache-technique',
  templateUrl: './modifier-tache-technique.component.html',
  styleUrls: ['./modifier-tache-technique.component.scss']
})
export class ModifierTacheTechniqueComponent implements OnInit {
  tacheTechniqueId: number;
  tacheTechniqueForm: FormGroup;
  TTUpdatedSuccessfully: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private tacheTechniqueService: TacheTechniqueService
  ) { }

  ngOnInit(): void {
    this.tacheTechniqueId = +this.route.snapshot.paramMap.get('id');
    this.initForm();
    this.loadTacheTechnique();
  }

  initForm(): void {
    this.tacheTechniqueForm = this.formBuilder.group({
      nomTacheTechnique: [''],
      descriptionTacheTechnique: [''],
      
      dateCreation: [''],
      statut_TT: [''],
    });
  }

  loadTacheTechnique(): void {
    this.tacheTechniqueService.getTacheTechniqueById(this.tacheTechniqueId)
      .subscribe((tacheTechnique) => {
        this.tacheTechniqueForm.patchValue({
          nomTacheTechnique: tacheTechnique.nomTacheTechnique,
          descriptionTacheTechnique: tacheTechnique.descriptionTacheTechnique,
        
          dateCreation: tacheTechnique.dateCreation,
          statut_TT: tacheTechnique.statut_TT,
        });
      });
  }

  onSubmit(): void {
    if (this.tacheTechniqueForm.valid) {
      const updatedTacheTechnique = {
        idTacheTechnique: this.tacheTechniqueId,
        nomTacheTechnique: this.tacheTechniqueForm.value.nomTacheTechnique,
        descriptionTacheTechnique: this.tacheTechniqueForm.value.descriptionTacheTechnique,
        userStoryId: this.tacheTechniqueForm.value.userStoryId,
        dateCreation: this.tacheTechniqueForm.value.dateCreation,
        statut_TT: this.tacheTechniqueForm.value.statut_TT,
      };

      this.tacheTechniqueService.updateTacheTechnique(updatedTacheTechnique.idTacheTechnique, updatedTacheTechnique)
        .subscribe(
          () => {
            console.log('Tâche technique mise à jour avec succès !');
            this.TTUpdatedSuccessfully = true;
            setTimeout(() => {
              this.TTUpdatedSuccessfully = false;
              this.router.navigate(['afficher-taches-techniques']);
            }, 500);
           
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de la tâche technique :', error);
          }
        );
    }
  }
}
