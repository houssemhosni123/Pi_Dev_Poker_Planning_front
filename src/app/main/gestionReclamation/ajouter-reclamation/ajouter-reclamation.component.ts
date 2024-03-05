import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'app/Services/gestionReclamationServices/ReclamationServices';
import { Reclam } from './modelReclamtion';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.scss']
})
export class AjouterReclamationComponent implements OnInit {
  newReclamation: Reclam = new Reclam();
  titreReunion: string = '';
  titresReunion: string[] = [];
  errorMessage: string = '';
  errorMessagee: string = '';
  badWords: string[] = ["badword1", "badword2", "badword3"];




  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getTitresReunion().subscribe(
      titres => {
        this.titresReunion = titres;
      },
      error => {
        console.error('Erreur lors de la récupération des titres de réunion :', error);
      }
    );
  }

  addReclamation(): void {
    if (this.newReclamation.contenu_Reclamation && this.newReclamation.contenu_Reclamation.trim() !== '') {
      if (this.newReclamation.contenu_Reclamation.split(/\s+/).some(word => this.badWords.includes(word.toLowerCase()))) {
        this.errorMessage = 'Désolé, votre message contient des mots inappropriés et ne peut pas être ajouté.';
        return;
      }
    }
  
    // Autres logiques pour ajouter la réclamation si elle est valide

    this.errorMessage = ''; // Réinitialisez le message d'erreur s'il n'y a pas d'erreur
  
    this.reclamationService.postNewReclamation(this.newReclamation, this.titreReunion).subscribe(
      () => {
        // Réinitialiser le formulaire et le message d'erreur
        this.newReclamation = new Reclam();
        this.titreReunion = '';
        this.errorMessage = '';
      },
      error => {
        console.error('Erreur lors de l\'ajout de la réclamation :', error);
        // Mettre à jour le message d'erreur avec le message reçu de la requête HTTP
        this.errorMessage = error.error;
      }
    );
  }
}