import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userstory } from 'Models/userstory.model';
import { UserStoryService } from 'app/Services/gestionUserStoryServices/UserStoryServices';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-modfier-userstory',
  templateUrl: './modfier-userstory.component.html',
  styleUrls: ['./modfier-userstory.component.scss']
})
export class ModfierUserstoryComponent implements OnInit {
  userstory: Userstory;
  IdUserStory: number;
  successMessage: string='';

  constructor(
    private userStoryService: UserStoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Extraire IdUserStory de la route
    this.IdUserStory = +this.route.snapshot.paramMap.get('IdUserStory');
    
    // Charger les détails de l'User Story à modifier
    this.userStoryService.getUserStoryById(this.IdUserStory).subscribe(
      (data:Userstory) =>{
        this.userstory= data;
      },
      (error) => {
        console.log(error);
      }
    );
    
  }



  saveChanges(): void {
    this.userStoryService.updateUserStory(this.IdUserStory, this.userstory).subscribe(
      (updatedUserStory: Userstory) => {
        console.log('User Story mise à jour avec succès :', updatedUserStory);
        this.successMessage = 'User Story modifiée avec succès.';
        
        // Rediriger vers la page des User Stories ou toute autre page nécessaire
        setTimeout(() => {
          this.successMessage = '';
          this.router.navigate(['/user-stories']);
        }, 2000); // Afficher le message pendant 2 secondes
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'User Story :', error);
      }
    );
  }
}
