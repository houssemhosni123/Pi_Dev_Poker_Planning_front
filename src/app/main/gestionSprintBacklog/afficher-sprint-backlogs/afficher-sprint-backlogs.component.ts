// afficher-sprint-backlogs.component.ts
import { Component, OnInit } from '@angular/core';
import { SprintBacklogService } from '../../../Services/gestionSprintBacklogServices/SprintBacklogServices';
import { ActivatedRoute } from '@angular/router';
import { SprintBacklog } from 'app/main/apps/model/sprintBacklog';

@Component({
  selector: 'app-afficher-sprint-backlogs',
  templateUrl: './afficher-sprint-backlogs.component.html',
  styleUrls: ['./afficher-sprint-backlogs.component.scss']
})
export class AfficherSprintBacklogsComponent implements OnInit {
   sprintId: number;
   sprintBacklogs: SprintBacklog[];

  constructor(
    private route: ActivatedRoute,
    private sprintBacklogService: SprintBacklogService
  ) {}

  ngOnInit(): void {
    // Récupérez l'ID du Sprint à partir des paramètres de l'URL
    this.sprintId = +this.route.snapshot.paramMap.get('sprintId');
    
    // Appelez le service pour obtenir les SprintBacklogs associés
    this.sprintBacklogService.getSprintBacklogsBySprintId(this.sprintId).subscribe(
      (data) => {
        this.sprintBacklogs = data;
        console.log('Sprint Backlogs:', this.sprintBacklogs);  
        console.table(this.sprintBacklogs);

      },
      (error) => {
        console.error('Erreur lors de la récupération des SprintBacklogs :', error);
      }
    );
  }
}
