import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iteration } from 'app/Model/iteration';
import { IterationService } from 'app/Services/gestionIterationServices/IterationServices';

@Component({
  selector: 'app-afficher-iteration',
  templateUrl: './afficher-iteration.component.html',
  styleUrls: ['./afficher-iteration.component.scss']
})
export class AfficherIterationComponent implements OnInit {

  iterations: any[] = [];
  originalIterations: Iteration[] = [];
  startDateFilter: string;
  endDateFilter: string;
  isSortActivated: boolean = false;
  p: number = 1; // page actuelle
  itemsPerPage: number = 5;
  constructor(private iterationService: IterationService,private router: Router) {}

  ngOnInit(): void {
    this.loadIterations();
  }
  updateIteration(id: number): void {
    // Utilisez la méthode navigateByUrl pour naviguer vers la route avec l'ID
  
    this.router.navigateByUrl(`/Iteration/modifier-iteration/${id}`);
  }
  showEstimations(id:number) :void {
    this.router.navigateByUrl(`/Iteration/ShowEstimations/${id}`);
  }
    loadIterations(): void {
      this.iterationService.getIterations().subscribe(
        (data) => {
          this.originalIterations = data;
          this.iterations = [...this.originalIterations]; // Copie les données d'origine
          this.updateIterationsList();

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
  filterByStartDate(): void {
    if (this.startDateFilter) {
      const filteredDate = new Date(this.startDateFilter);
      this.iterations = this.originalIterations.filter(iteration => {
        const iterationStartDate = new Date(iteration.date_IterationDebut);
        const enDate = new Date(iteration.date_IterationFin);
        return (
          iterationStartDate.getFullYear() === filteredDate.getFullYear() &&
          iterationStartDate.getMonth() === filteredDate.getMonth() &&
          iterationStartDate.getDate() === filteredDate.getDate() ||
          enDate.getFullYear() === filteredDate.getFullYear() &&
          enDate.getMonth() === filteredDate.getMonth() &&
          enDate.getDate() === filteredDate.getDate() 
        );
      });
    } else {
      this.iterations = [...this.originalIterations]; // Réinitialise avec les données d'origine
    }
  }
  updateIterationsList(): void {
    this.iterations = this.isSortActivated
      ? AfficherIterationComponent.sortIterationsByStartDate([...this.originalIterations])
      : [...this.originalIterations];
  }

  toggleSort(): void {
    this.isSortActivated = !this.isSortActivated;
    this.updateIterationsList();
  }
  static sortIterationsByStartDate(iterations: Iteration[]): Iteration[] {
    return iterations.sort((a, b) => {
      const dateA = new Date(a.date_IterationDebut);
      const dateB = new Date(b.date_IterationDebut);

      if (dateA < dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  }

