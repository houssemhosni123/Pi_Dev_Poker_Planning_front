import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'Models/projet.model';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
@Component({
  selector: 'app-modfier-projet',
  templateUrl: './modfier-projet.component.html',
  styleUrls: ['./modfier-projet.component.scss']
})
export class ModfierProjetComponent implements OnInit {
  projet: Projet;
  idProjet: number;
  successMessage: string = '';
  constructor(private route: ActivatedRoute,private router: Router, private projetService: ProjetService) { }

  ngOnInit(): void {
    this.idProjet = +this.route.snapshot.paramMap.get('idProjet');
    this.projetService.getProjetById(this.idProjet).subscribe(
      (data: Projet) => {
        this.projet = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveChanges(): void {
    this.projetService.updateProjet(this.idProjet, this.projet).subscribe(
      (updatedProjet: Projet) => {
        console.log('Projet mis à jour avec succès:', updatedProjet);
        this.successMessage = 'Projet modifié avec succès.';
        // Rediriger vers la page des projets ou toute autre page nécessaire
        setTimeout(() => {
          this.successMessage = '';
          this.router.navigate(['/projets']);
        }, 2000); // Afficher le message pendant 2 secondes
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du projet:', error);
      }
    ); 
}
}
