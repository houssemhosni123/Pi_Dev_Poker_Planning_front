import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Iteration } from 'app/Model/iteration';
import { IterationService } from 'app/Services/gestionIterationServices/IterationServices';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { SelectedUserStoryService } from 'app/Services/gestionSessionServices/selected';
import {  StartsocketService } from 'app/Services/gestionSessionServices/startchatSocket';

@Component({
  selector: 'app-startvote',
  templateUrl: './startvote.component.html',
  styleUrls: ['./startvote.component.scss']
})
export class StartvoteComponent implements OnInit {
  userStories: any[];
  selectedItems: any[] = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  Listproject: any[] = [];
  selectedProject: string | undefined;

  constructor(private sessionService: sessionservice,private iterationService :IterationService, private route: ActivatedRoute,private selectedUserStoryService: SelectedUserStoryService,private startsocketservice:StartsocketService) { }

  ngOnInit(): void {
    this.getListProject();
  }

  getListProject() {
    this.sessionService.getListProject().subscribe(
      res => {
        console.log(res);
        this.Listproject = res;
        // Sélectionner automatiquement le premier projet dans la liste
        if (this.Listproject.length > 0) {
          this.selectedProject = this.Listproject[0].nom_Projet;
          this.loadUserStories(); // Charger automatiquement les user stories pour le premier projet
        }
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  getUserStory(nomProjet: string): void {
    this.sessionService.getUserStory(nomProjet).subscribe(
      (data: any[]) => {
        this.userStories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleRowSelection(row: any): void {
    const index = this.selectedItems.findIndex(item => item.titre_US.toLowerCase() === row.titre_US.toLowerCase());
    if (index > -1) {
      this.selectedItems = this.selectedItems.filter(item => item.titre_US.toLowerCase() !== row.titre_US.toLowerCase());
    } else {
      this.selectedItems.push(row);
    }
    this.selectedUserStoryService.selectedUserStoryTitle = row.titre_US;
    console.log( this.selectedUserStoryService.selectedUserStoryTitle)
  }

  loadUserStories(): void {
    if (this.selectedProject) {
      this.getUserStory(this.selectedProject);
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

    const selectedUserStoryTitle = this.selectedUserStoryService.selectedUserStoryTitle;
    console.log('Titre de l\'user story sélectionnée:', selectedUserStoryTitle);
  this.startsocketservice.sendUserStory(selectedUserStoryTitle);
  // Utilisez le titre de l'user story sélectionnée comme nécessaire dans votre logique d'itération
  
}

}