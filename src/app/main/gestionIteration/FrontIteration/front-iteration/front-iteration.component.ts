import { Component, OnInit } from '@angular/core';
import { Estimation } from 'app/Model/estimation';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';

@Component({
  selector: 'app-front-iteration',
  templateUrl: './front-iteration.component.html',
  styleUrls: ['./front-iteration.component.scss']
})
export class FrontIterationComponent implements OnInit {

  selectedValue: number | undefined;

  constructor(private estimationService: EstimationserviceService) { }

  onSquareClick(value: number): void {
    // Créer une nouvelle estimation avec la valeur sélectionnée
    const newEstimation: Estimation = {
      valeur: value
      // Ajoutez d'autres propriétés d'estimation au besoin
    };

    // Envoyer la nouvelle estimation au backend
    this.estimationService.addEstimation(newEstimation).subscribe(
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
  ngOnInit(): void {
 
  }

}
