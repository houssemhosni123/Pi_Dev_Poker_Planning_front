
// tache-technique-add.component.ts

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacheTechniqueService } from '../../../Services/gestionTacheTechnique/TacheTechniqueService';
import { TacheTechnique, StatutTacheTechnique } from '../../apps/model/tachTechnique';
import { UserStory } from '../../apps/model/userStory';



@Component({
  selector: 'app-tache-technique-add',
  templateUrl: './ajouter-tache-technique.component.html',
  styleUrls: ['./ajouter-tache-technique.component.scss'],
})
export class TacheTechniqueAddComponent {
  tacheTechniqueForm: FormGroup;
  statutsTacheTechnique: StatutTacheTechnique[] = Object.values(StatutTacheTechnique);

  constructor(private formBuilder: FormBuilder, private tacheTechniqueService: TacheTechniqueService) {
    this.tacheTechniqueForm = this.formBuilder.group({
      nomTacheTechnique: ['', Validators.required],
      descriptionTacheTechnique: ['', Validators.required],
      statut_TT: [null, Validators.required],
      dateDebut: [null], // Ajoutez le champ pour la date de début
      dateFin: [null],   // Ajoutez le champ pour la date de fin
    });
  }

  onSubmit() {
    if (this.tacheTechniqueForm.valid) {
      const formData = this.tacheTechniqueForm.value;
      this.tacheTechniqueService.createTacheTechnique(formData).subscribe(
        (createdTacheTechnique) => {
          console.log('Tâche technique ajoutée avec succès:', createdTacheTechnique);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la tâche technique:', error);
        }
      );
    }
  }
}
