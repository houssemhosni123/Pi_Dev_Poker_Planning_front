import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estimation } from 'app/Model/estimation';
import { Iteration } from 'app/Model/iteration';
import { IterationService } from 'app/Services/gestionIterationServices/IterationServices';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';

@Component({
  selector: 'app-front-iteration',
  templateUrl: './front-iteration.component.html',
  styleUrls: ['./front-iteration.component.scss']
})
export class FrontIterationComponent implements OnInit {

  selectedValue: number | undefined;
  
  constructor(private estimationService: EstimationserviceService,private iterationService :IterationService,private router: Router ) { }
  Showvotes(): void {
    // Utilisez la méthode navigateByUrl pour naviguer vers la route avec l'ID
  
    this.router.navigateByUrl(`/Iteration/ShowVotes`);
  }
  ShowAllVotesScrumMaster():void
  {
    this.Showvotes();
  }
  onSquareClick(value: number): void {
    // Créer une nouvelle estimation avec la valeur sélectionnée
    const newEstimation: Estimation = {
      valeur: value,
      dateVote: new Date()
      // Ajoutez d'autres propriétés d'estimation au besoin
    };
    this.Showvotes();
    // Envoyer la nouvelle estimation au backend
    this.estimationService.AddEstimationWithIteration(newEstimation).subscribe(
      (response) => {
        console.log('Estimation added successfully:', response);
        // Gérer les réponses ou les mises à jour côté frontend si nécessaire
      },
      (error) => {
        console.error('Error adding estimation:', error);
        // Gérer les erreurs côté frontend si nécessaire
      }
    );
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
  ngOnInit(): void {
 
  }

}
