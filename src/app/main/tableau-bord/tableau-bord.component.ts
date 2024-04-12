

// tableau-bord.component.ts

/*import { Component, OnInit } from '@angular/core';
import { SprintService } from '../../Services/gestionSprintServices/SprintService';
import { Sprint } from '../apps/model/sprint';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.scss']
})
export class TableauBordComponent implements OnInit {
  sprints: Sprint[] = [];
  selectedSprint: number | null = null;
  sprintProgression: number = 0;


  constructor(private sprintService: SprintService) {  this.selectedSprint = null; }

  ngOnInit(): void {
    this.loadSprints();
  }

  loadSprints(): void {
    this.sprintService.getAllSprints().subscribe(sprints => {
      console.log('All Sprints:', sprints);
      this.sprints = sprints;
    });
  }

  onSprintSelected(): void {
    if (this.selectedSprint !== null) {
      console.log('Selected Sprint ID:', this.selectedSprint);
      this.sprintService.getSprintProgression(this.selectedSprint).subscribe(
        progression => {
          console.log('Sprint Progression:', progression);
          this.sprintProgression = progression;
        },
        error => {
          console.error('Error fetching sprint progression:', error);
        }
      );
    }
  }
  
}*/
