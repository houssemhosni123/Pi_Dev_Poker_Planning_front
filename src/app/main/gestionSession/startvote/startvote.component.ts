import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router,private sessionService: sessionservice,private iterationService :IterationService, private route: ActivatedRoute,private selectedUserStoryService: SelectedUserStoryService,private startsocketservice:StartsocketService) { }

  ngOnInit(): void {
    this.getListProject();
  }
  Showvotes(): void {
    // Utilisez la méthode navigateByUrl pour naviguer vers la route avec l'ID
  
    this.router.navigateByUrl(`/Iteration/ShowVotes`);
  }
  getListProject() {
    this.sessionService.getListProject().subscribe(
      res => {
        console.log(res);
        this.Listproject = res;

        if (this.Listproject.length > 0) {
          this.selectedProject = this.Listproject[0].nom_Projet;
          this.loadUserStories(); 
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
    const index = this.selectedItems.findIndex(item => item.titre_US === row.titre_US);
    if (index > -1) {
     
      this.selectedItems.splice(index, 1);
    } else {
   
      this.selectedItems.push(row);
    }
    this.selectedUserStoryService.selectedUserStoryTitle = row.titre_US;
    console.log(this.selectedUserStoryService.selectedUserStoryTitle);
  }
  
  onMouseEnter(story: any) {
    story.hovered = true; 
  }

  onMouseLeave(story: any) {
    story.hovered = false; 
  }

  getVelociteColor(velocite: number): string {
    if (velocite >= 10) {
      return 'orange'; 
    } else if (velocite >= 1) {
      return 'green'; 
    } else {
      return ''; 
    }
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
  this.Showvotes();
}


}