import { Component, OnInit } from '@angular/core';
import { Iteration } from 'app/Model/iteration';
import { IterationService } from 'app/Services/gestionIterationServices/IterationServices';

@Component({
  selector: 'app-afficher-iteration',
  templateUrl: './afficher-iteration.component.html',
  styleUrls: ['./afficher-iteration.component.scss']
})
export class AfficherIterationComponent implements OnInit {

  iterations: any[] = [];

  constructor(private iterationService: IterationService) {}

  ngOnInit(): void {
    this.loadIterations();
  }
  loadIterations(): void {
    this.iterationService.getIterations().subscribe(
      (data) => {
        this.iterations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des itérations :', error);
      }
    );
  }
  deleteIteration(iteration: Iteration): void {
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cette itération ?');

    if (confirmDelete) {
      this.iterationService.deleteIteration(iteration.idIteration).subscribe(
        () => {
          // Supprimez l'itération de la liste après la suppression réussie
          this.iterations = this.iterations.filter(i => i.idIteration !== iteration.idIteration);
          console.log('Itération supprimée avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'itération :', error);
        }
      );
    }
  }

}
