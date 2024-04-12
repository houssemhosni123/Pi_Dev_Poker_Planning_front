import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-vote-session',
  templateUrl: './vote-session.component.html',
  styleUrls: ['./vote-session.component.scss']
})
export class VoteSessionComponent implements OnInit {
  developer: any[] = [];
  selectedItems: any[] = [];
  filteredDeveloper: any[] = [];
  userStories: any[] = []; 
  idProjet: number = 1; 
  selectedUsers: any[] = []; 
  selectedUserStories: any[] = []; 

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(private sessionService: sessionservice) { }

  ngOnInit(): void {
    this.getDev();
  }

  toggleRowSelection(row: any) {
    const index = this.selectedItems.findIndex(item => item.email_user === row.email_user);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(row);
    }
  }

  getDev() {
    this.sessionService.getDev().subscribe(
      res => {
        console.log(res);
        this.developer = res;
        this.filteredDeveloper = res;
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  searchDeveloper(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredDeveloper = this.developer.filter(dev => 
      dev.nom_user.toLowerCase().includes(searchText) || 
      dev.prenom_user.toLowerCase().includes(searchText) || 
      dev.email_user.toLowerCase().includes(searchText)
    );
  }

  sendInvitations() {
    const emails = this.selectedItems.map(user => user.email_user);
    this.sessionService.sendEmail(emails).subscribe(
      response => {
        console.log('E-mails envoyés avec succès');
      },
      error => {
        console.error('Erreur lors de l\'envoi des e-mails:', error);
      }
    );
  }

 
}
  




