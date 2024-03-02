import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
import { data } from 'autoprefixer';
import { Projet } from 'Models/projet.model';
@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.scss']
})
export class AfficherProjetComponent implements OnInit {
  projets:Projet[];
  public contentHeader: object;
  constructor(private projetService: ProjetService ) { }

  ngOnInit() : void {
    this.contentHeader = {
      headerTitle: 'Bootstrap Tables',
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
            name: 'Table',
            isLink: true,
            link: '/'
          },
          {
            name: 'Bootstrap Tables',
            isLink: false
          }
        ]
      }
    };
    
    this.loadProjets();
  }
  loadProjets(): void {
    this.projetService.getProjets().subscribe((data:Projet[]) => {
        this.projets = data;
        console.log(this.projets)
      },
      (error) => {
        console.log(error);
      }
    );
}

}
