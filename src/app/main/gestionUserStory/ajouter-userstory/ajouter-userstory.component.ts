import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetDetails } from 'Models/projet-details.model';
import { UserStoryService } from 'app/Services/gestionUserStoryServices/UserStoryServices';
@Component({
  selector: 'app-ajouter-userstory',
  templateUrl: './ajouter-userstory.component.html',
  styleUrls: ['./ajouter-userstory.component.scss']
})
export class AjouterUserstoryComponent implements OnInit {

  projetDetails: ProjetDetails | null = null;
  idProjet:number;
  constructor(private route: ActivatedRoute, private UserstoryService:UserStoryService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    // Récupérer l'ID du projet depuis la route
    this.route.params.subscribe(params => {
      this.idProjet = +params['idProjet']; // Utilisez this.idProjet au lieu de déclarer idProjet localement
      // Appeler le service pour récupérer les détails du projet
      this.UserstoryService.getProjetDetailsForUserStory(this.idProjet).subscribe(
        (data: ProjetDetails) => {
          this.projetDetails = data;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
