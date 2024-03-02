import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
import { Projet } from 'Models/projet.model';
import { Router } from '@angular/router';
import * as snippet from 'app/main/forms/form-layout/form-layout.snippetcode';
@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent implements OnInit {
 // public contentHeader: object;
  public _snippetCodeHorizontal = snippet.snippetCodeHorizontal;
  public _snippetCodeIcons = snippet.snippetCodeIcons;
  public _snippetCodeVertical = snippet.snippetCodeVertical;
  public _snippetCodeVertiacalIcons = snippet.snippetCodeVertiacalIcons;
  public _snippetCodeMultiple = snippet.snippetCodeMultiple;

  projet: Projet = {
    idProjet: 0,
    Nom_Projet: '',
    Client: '',
    Description_Projet: '',
    DateDebut_Projet: new Date(),
    DateFin_Projet: new Date()
  };

  constructor(private projetService: ProjetService,private router: Router) { }
  ngOnInit(): void {}
    // Initialisation si nécessaire
  
  saveProjet(): void {
    this.projetService.createProjet(this.projet)
      .subscribe(
        response => {
          console.log(response);
          // Rediriger vers la liste des projets après la création
          this.router.navigate(['/projets']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
  
    /*this.contentHeader = {
      headerTitle: 'Form Layouts',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Forms',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Layouts',
            isLink: false
          }
        ]
      }*/
  


