// afficher-sprint-backlogs.component.ts
import { Component, OnInit } from '@angular/core';
import { SprintBacklogService } from '../../../Services/gestionSprintBacklogServices/SprintBacklogServices';
import { ActivatedRoute } from '@angular/router';
import { SprintBacklog } from 'app/main/apps/model/sprintBacklog';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-afficher-sprint-backlogs',
  templateUrl: './afficher-sprint-backlogs.component.html',
  styleUrls: ['./afficher-sprint-backlogs.component.scss']
})
export class AfficherSprintBacklogsComponent implements OnInit {
  sprintId: number;
  sprintBacklogs: SprintBacklog[];
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sprintBacklogService: SprintBacklogService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.sprintId = +this.route.snapshot.paramMap.get('sprintId');
    this.loadSprintBacklogs();
  }
  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadSprintBacklogs(): void {
    this.subscription = this.sprintBacklogService.getSprintBacklogsBySprintId(this.sprintId).subscribe(
      (data) => {
        this.sprintBacklogs = data;
        console.log('Sprint Backlogs:', this.sprintBacklogs);
      },
      (error) => {
        console.error('Erreur lors de la récupération des SprintBacklogs :', error);
      }
    );
  }

  

  unassignSprint(sprintBacklogId: number): void {
    this.sprintBacklogService.unassignSprintFromSprintBacklog(sprintBacklogId).subscribe(
      (result) => {
        console.log('Sprint Backlog désaffecté avec succès:', result);
        this.ngZone.run(() => {
          this.loadSprintBacklogs();
          this.cdr.detectChanges();
        });
      },
      (error) => {
        console.error('Erreur lors de la désaffectation du Sprint Backlog :', error);
      }
    );
  }
}
