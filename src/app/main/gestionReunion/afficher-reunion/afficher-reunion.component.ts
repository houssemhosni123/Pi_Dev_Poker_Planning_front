import { Component, OnInit } from '@angular/core';
import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import { EventReff } from '../ajouter-reunion/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-reunion',
  templateUrl: './afficher-reunion.component.html',
  styleUrls: ['./afficher-reunion.component.scss']
})
export class AfficherReunionComponent implements OnInit {
  events : EventReff [];
  

  constructor(private reunionService:ReunionService,private router: Router) { }

  ngOnInit(): void {
    this.reunionService.getAllEvent().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des Sprints :', error);
      }
    );  
    this.chargerSprints();  }
  chargerSprints(): void {
    this.reunionService.getAllEvent().subscribe(
      (events) => {
        this.events = events;
        console.log("Événements chargés avec succès :", events);
        // utilisez this.events pour accéder aux données
      },
      (erreur) => {
        console.error('Erreur lors du chargement des sprints :', erreur);
      }
    );
  }
  ouvrirFormulaireUpdate(idReunion: number): void {
    this.router.navigate(['/Reunions', idReunion, 'update']);
  }
  supprimerSprint(idReunion: number): void {
    this.reunionService.deleteSprint(idReunion).subscribe(
      () => {
        console.log('Sprint supprimé avec succès !');
        // Rechargez la liste des sprints après la suppression
        this.chargerSprints();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression du sprint :', erreur);
      }
    );
  }
  

}
