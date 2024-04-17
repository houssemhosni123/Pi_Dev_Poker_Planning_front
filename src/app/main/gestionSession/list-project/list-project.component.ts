import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

Listproject: any[] = [];

  constructor(private sessionService: sessionservice, private router: Router) { }

  ngOnInit(): void {
    this.getListProject();
    
  }

  getListProject(){
    this.sessionService.getListProject().subscribe(
      res =>{
        console.log(res);
      this.Listproject = res;
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }
  showUsersForProject(nom_Projet: string) {
    if (nom_Projet && nom_Projet.trim() !== '') {
      console.log('Nom du projet:', nom_Projet);
      this.router.navigate(['/ListUserForProject', nom_Projet]);
    } else {
      console.error('Le nom du projet est vide ou non défini.');
     
    }
  }
  

}
