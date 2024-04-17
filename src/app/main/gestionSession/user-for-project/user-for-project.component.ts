import { Component, OnInit } from '@angular/core';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-for-project',
  templateUrl: './user-for-project.component.html',
  styleUrls: ['./user-for-project.component.scss']
})
export class UserForProjectComponent implements OnInit {
  usersAndRoles: any[] = [];
  selectedItems: any[] = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  idSession: number;

  constructor(private sessionService: sessionservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const nom_Projet = params.get('nom_Projet');
      if (nom_Projet) {
        this.getUserForProject(nom_Projet);
      }
    });
    this.idSession = this.route.snapshot.queryParams['nomSession'];
    console.log('Session ID:', this.idSession);
    
  }
  

  getUserForProject(nom_Projet: string) {
    this.sessionService.getUserForProject(nom_Projet).subscribe(
      (res: any[]) => {
        console.log(res);
        this.usersAndRoles = res.map(user => ({ email: user[0], role: user[2] }));
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  toggleRowSelection(row: any) {
    const index = this.selectedItems.findIndex(item => item.email === row.email);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(row);
    }
  }
  sendInvitations() {
    const emails = this.selectedItems.map(user => user.email);
    const idSession = this.idSession; // Supposons que sessionId soit récupéré depuis ActivatedRoute
  
    if (emails.length > 0) {
      this.sessionService.sendEmail(emails, idSession).subscribe(
        response => {
          console.log('E-mails envoyés avec succès');
        },
        error => {
          console.error('Erreur lors de l\'envoi des e-mails:', error);
        }
      );
    } else {
      console.warn('Aucun e-mail sélectionné pour l\'envoi');
    }
  }
  
  
  

}
