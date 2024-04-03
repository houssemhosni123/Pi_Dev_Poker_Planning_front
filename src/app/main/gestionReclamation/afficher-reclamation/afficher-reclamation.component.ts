import { Component, OnInit } from '@angular/core';
import { Reclam } from '../ajouter-reclamation/modelReclamtion';
import { ReclamationService } from 'app/Services/gestionReclamationServices/ReclamationServices';
import { Router } from '@angular/router';
import 'chart.js';


@Component({
  selector: 'app-afficher-reclamation',
  templateUrl: './afficher-reclamation.component.html',
  styleUrls: ['./afficher-reclamation.component.scss']
})
export class AfficherReclamationComponent implements OnInit {
  reclamation : Reclam [];

  constructor(private serviceReclamation:ReclamationService,private router: Router) { }

  ngOnInit(): void {
    this.serviceReclamation.getAllReclamation().subscribe(
      (data) => {
        this.reclamation = data;
        console.log(this.reclamation);
      },
      (error) => {
        console.error('Erreur lors de la récupération des Sprints :', error);
      }
    );  
    this.chargerReclamation();  }
    formatDate(date: string): string {
      return new Date(date).toLocaleString();
    }
  
    chargerReclamation(): void {
      this.serviceReclamation.getAllReclamation().subscribe(
        (events) => {
          this.reclamation = events; // Mettez à jour this.reclamation avec les données récupérées
          console.log("Réclamations chargées avec succès :", this.reclamation);
        },
        (erreur) => {
          console.error('Erreur lors du chargement des réclamations :', erreur);
        }
      );
    }
    ouvrirFormulaireUpdate(idReclamation: number): void {
      this.router.navigate(['/Reclamation', idReclamation, 'update']);
    }
    supprimerReclamation(idReclamation: number): void {
      this.serviceReclamation.deleteReclamation(idReclamation).subscribe(
        () => {
          console.log('Sprint supprimé avec succès !');
          // Rechargez la liste des sprints après la suppression
          this.chargerReclamation();
        },
        (erreur) => {
          console.error('Erreur lors de la suppression du sprint :', erreur);
        }
      );
    }
    
}
