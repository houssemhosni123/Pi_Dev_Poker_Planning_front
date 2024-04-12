import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-page-vote',
    templateUrl: './page-vote.component.html',
    styleUrls: ['./page-vote.component.scss']
})
export class PageVoteComponent implements OnInit {

    idProjet: number = 1;
    userStories: any[];
    ColumnMode: any = ColumnMode;
    _snippetCodeUserStories: any;
    filteredUserStories: any[];

    constructor(private sessionService: sessionservice) { }

    ngOnInit(): void {
        this.getUserStories();
    }

    getUserStories() {
        this.sessionService.getUserStory(this.idProjet).subscribe(
          (data: any) => {
            this.userStories = data;
          },
          (error: any) => {
            console.error('Erreur lors de la récupération des user stories :', error);
          }
        );
      }
      onCheckboxChange(row: any) {
        row.checked = !row.checked;
      }

      searchUserStory(event: any) {
        const searchText = event.target.value.toLowerCase();
        // Filtrer les user stories en fonction du texte de recherche
        this.filteredUserStories = this.userStories.filter(userStory =>
            userStory.titre_US.toLowerCase().includes(searchText) ||
            userStory.description_US.toLowerCase().includes(searchText) ||
            userStory.statut_US.toLowerCase().includes(searchText) ||
            userStory.velocite_US.toString().toLowerCase().includes(searchText)
        );
    }
    
    
    
}