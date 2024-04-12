import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
import { data } from 'autoprefixer';
import { Projet } from 'Models/projet.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.scss']
})
export class AfficherProjetComponent implements OnInit {
  projets:Projet[];
  public contentHeader: object;
  constructor(private projetService: ProjetService,private router: Router,private httpClient:HttpClient ) { }

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
updateProjet(idProjet: number, projet: Projet):void {
  this.router.navigate(['/edit-projet', idProjet]);
}
deleteProjet(idProjet: number){
  this.httpClient.delete(`http://localhost:8080/Projet/deleteprojet/${idProjet}`).subscribe(
    () => {
      // Gérer la suppression réussie
      console.log('Projet supprimé avec succès.');
      // Mettre à jour la liste des projets ou toute autre logique nécessaire
    
    },
    (error: any) => {
      console.error('Erreur lors de la suppression du projet:', error);
    }
  );
}

}
