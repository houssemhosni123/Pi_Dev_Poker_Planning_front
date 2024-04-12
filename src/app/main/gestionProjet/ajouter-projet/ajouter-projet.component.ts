import * as snippet from 'app/main/forms/form-layout/form-layout.snippetcode';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Userstory } from "Models/userstory.model"; 
import { Projet } from 'Models/projet.model';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent implements OnInit {
  projetForm: FormGroup;
  userStoryControls: FormArray;

  public contentHeader: object;

  public _snippetCodeHorizontal = snippet.snippetCodeHorizontal;
  public _snippetCodeIcons = snippet.snippetCodeIcons;
  public _snippetCodeVertical = snippet.snippetCodeVertical;
  public _snippetCodeVertiacalIcons = snippet.snippetCodeVertiacalIcons;
  public _snippetCodeMultiple = snippet.snippetCodeMultiple;


  constructor(private formBuilder: FormBuilder, private projetService: ProjetService) {
    this.projetForm = this.formBuilder.group({
      Nom_Projet: ['', Validators.required],
      Client: ['', Validators.required],
      Description_Projet: [''],
      DateDebut_Projet: ['', Validators.required],
      DateFin_Projet: ['', Validators.required],
      userStory: this.formBuilder.array([])
    });

    this.userStoryControls = this.projetForm.get('userStory') as FormArray;
  }

  ngOnInit(): void {}

  ajouterUserStory() {
    const userStoryFormGroup = this.formBuilder.group({
      titre_US: ['', Validators.required],
      description_US: ['', Validators.required],
      statut_US: ['Afaire', Validators.required],
      velocite_US: [0, Validators.required] // Valeur par défaut, ou 0
    });

    this.userStoryControls.push(userStoryFormGroup);
  }

  saveProjet() {
    if (this.projetForm.valid) {
      const formValue = this.projetForm.value;
  
      const dateDebutISO = new Date(formValue.DateDebut_Projet).toISOString();
      const dateFinISO = new Date(formValue.DateFin_Projet).toISOString();
  
      const projet: Projet = {
        
        nom_Projet: formValue.Nom_Projet,
        client: formValue.Client,
        description_Projet: formValue.Description_Projet,
        dateDebut_Projet: dateDebutISO,
        dateFin_Projet: dateFinISO,
        userStory: formValue.userStory as Userstory[]
      };
  
      console.log('Objet Projet à envoyer:', projet);
  
      this.projetService.createProjet(projet).subscribe(
        (response: any) => {
          console.log('Réponse de l\'API:', response);
          this.projetForm.reset();
        },
        (error: any) => {
          console.error('Erreur lors de l\'envoi à l\'API:', error);
        }
      );
    }
  }
  
}  