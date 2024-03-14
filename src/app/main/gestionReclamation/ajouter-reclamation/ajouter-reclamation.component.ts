import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'app/Services/gestionReclamationServices/ReclamationServices';
import { Reclam } from './modelReclamtion';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.scss']
})
export class AjouterReclamationComponent implements OnInit {
  newReclamation: Reclam = new Reclam();
  userId: number;

  titreReunion: string = '';
  titresReunion: string[] = [];
  errorMessage: string = '';
  badWords: string[] = ["badword1", "badword2", "badword3"];

  constructor(private authent: AuthenticationService, private router: Router, private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.userId = this.authent.currentUserValue.idUser; // Retrieve the user ID on component initialization

    this.reclamationService.getTitresReunion().subscribe(
      titres => {
        this.titresReunion = titres;
      },
      error => {
        console.error('Erreur lors de la récupération des titres de réunion :', error);
      }
    );
  }

  redirigerVersListeSprints() {
    this.router.navigate(['Reunion/AfficherReclamation']);
  }

  addReclamation(): void {
    if (this.newReclamation.contenu_Reclamation && this.newReclamation.contenu_Reclamation.trim() !== '') {
      if (this.newReclamation.contenu_Reclamation.split(/\s+/).some(word => this.badWords.includes(word.toLowerCase()))) {
        this.errorMessage = 'Désolé, votre message contient des mots inappropriés et ne peut pas être ajouté.';
        return;
      }
    }

    // Other logic to add the reclamation if it is valid

    this.errorMessage = ''; // Reset the error message if there is no error

    this.reclamationService.postNewReclamation(this.newReclamation, this.titreReunion, this.userId).subscribe(
      () => {
        // Reset the form and error message
        this.newReclamation = new Reclam();
        this.titreReunion = '';
        this.errorMessage = '';
      },
      error => {
        console.error('Erreur lors de l\'ajout de la réclamation :', error);
        // Update the error message with the message received from the HTTP request
        this.errorMessage = error.error;
      }
    );
  }
}
