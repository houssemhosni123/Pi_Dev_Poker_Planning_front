import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estimation } from 'app/Model/estimation';
import { Iteration } from 'app/Model/iteration';
import { IterationService } from 'app/Services/gestionIterationServices/IterationServices';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';
import {StartsocketService } from 'app/Services/gestionSessionServices/startchatSocket';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-front-iteration',
  templateUrl: './front-iteration.component.html',
  styleUrls: ['./front-iteration.component.scss']
})
export class FrontIterationComponent implements OnInit {
  selectedUserStoryTitle :any;
  selectedValue: number | undefined;
  
  constructor(private authent:AuthenticationService,private estimationService: EstimationserviceService,private iterationService :IterationService,private router: Router,private startsocketservice:StartsocketService ) { }
  ngOnInit(): void {
    this.estimationService.getEstimations().subscribe((estimation: Estimation) => {
      // Mettez à jour votre interface utilisateur avec la nouvelle estimation si nécessaire
    });
    this.startsocketservice.getUserStory().subscribe((selectedUserStoryTitle: string) => {
      this.selectedUserStoryTitle = selectedUserStoryTitle;
    });
  }
  //selectedUserStoryTitle=this.startsocketservice.getUserStory();
  Showvotes(): void {
    // Utilisez la méthode navigateByUrl pour naviguer vers la route avec l'ID
  
    this.router.navigateByUrl(`/Iteration/ShowVotes`);
  }
  ShowAllVotesScrumMaster():void
  {
    this.Showvotes();
  }

  /* onSquareClick(value: number): void {
    // Get the current user's ID from the authentication service
    const userId = this.authent.currentUserValue.idUser;
    
    // Create a new estimation with the selected value and the current date
    const newEstimation: Estimation = {
      valeur: value,
      dateVote: new Date(),
      idUser: userId, // Set the idUser property with the current user's ID
      // Add other estimation properties as needed
    };
    
    // Show votes or perform any other actions as necessary
    
    
    // Send the new estimation to the backend
    this.estimationService.AddEstimationWithIteration(newEstimation,userId).subscribe(
      (response) => {
        console.log('Estimation added successfully:', response);
        // Handle responses or frontend updates as needed
        this.Showvotes();
      },
      (error) => {
        console.error('Error adding estimation:', error);
        // Handle errors on the frontend as needed
      }
    );
  }
  */




  newEstimation:Estimation;
  
  onSquareClick(value: number): void {
    // Assurez-vous que la valeur sélectionnée n'est pas nulle
   
    const userId = this.authent.currentUserValue.idUser;
    if (value !== null && value !== undefined) {
      // Get the current user's ID from the authentication service
     
      
      // Create a new estimation with the selected value and the current date
     
     this.newEstimation={
      id_Estimation:null,
      valeur: value,
      dateVote: new Date(),
      idUser: this.authent.currentUserValue.idUser,// Set the idUser property with the current user's ID
}
      // Envoyez la nouvelle estimation au service d'estimation
      this.estimationService.AddEstimationWithIteration(this.newEstimation,userId).subscribe(
        (response) => {
          console.log('Estimation added successfully:', response);
          // Mettez à jour votre interface utilisateur ou effectuez d'autres actions si nécessaire
          this.Showvotes(); // Afficher les votes après l'ajout de l'estimation
        },
        (error) => {
          console.error('Error adding estimation:', error);
          // Gérez les erreurs côté frontend si nécessaire
        }
      );
    } else {
      console.error('La valeur sélectionnée est nulle.');
    }
  }
  
    lancerIteration() {
      
      const nouvelleIteration: Iteration = {
        idIteration: null,
        resultat: 'Encours', // Vous devez définir la valeur appropriée ici
        date_IterationDebut: new Date(),
        date_IterationFin: null
      };
  
      this.iterationService.addIteration(nouvelleIteration).subscribe(
        (resultat) => {
          console.log('Itération ajoutée avec succès', resultat);
        },
        (erreur) => {
          console.error('Erreur lors de l\'ajout de l\'itération', erreur);
        }
      );
    }
 

}
