import { Component, OnInit } from '@angular/core';
import { SprintBacklogService } from '../../../Services/gestionSprintBacklogServices/SprintBacklogServices';
import { SprintBacklog } from '../../apps/model/sprintBacklog';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-afficher-sprint-backlog',
  templateUrl: './afficher-sprint-backlog.component.html',
  styleUrls: ['./afficher-sprint-backlog.component.scss']
})
export class SprintBacklogListComponent implements OnInit {
  updateForm: FormGroup;
  sprintBacklogs: SprintBacklog[] = [];
  sprintBacklogUpdatedSuccessfully: boolean = false;
  sprintId: number;

  constructor(
    private sprintBacklogService: SprintBacklogService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadSprintBacklogs();
    this.initUpdateForm();
  }

  loadSprintBacklogs(): void {
    this.sprintBacklogService.getAllSprintBacklogs().subscribe(
      (data: SprintBacklog[]) => {
        this.sprintBacklogs = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des Sprint Backlogs : ', error);
      }
    );
  }
  

  

  supprimerSprintBacklog(sprintBacklogId: number): void {
    this.sprintBacklogService.deleteSprintBacklog(sprintBacklogId).subscribe(
      () => {
        console.log('Sprint Backlog supprimé avec succès !');
        this.loadSprintBacklogs();
      },
      (erreur) => {
        console.error('Erreur lors de la suppression du Sprint Backlog :', erreur);
      }
    );
  }

  ouvrirFormulaireUpdate(sprintBacklogId: number): void {
    this.sprintBacklogUpdatedSuccessfully = false;
    this.router.navigate(['/sprintBacklog', sprintBacklogId, 'update']);
  }

  private initUpdateForm(): void {
    this.updateForm = this.fb.group({
      nomSprint: ['', Validators.required],
      objectifSprint: ['', Validators.required],
      effortEstimation: ['', Validators.required],
      definitionOfDone: ['', Validators.required],
      priorite: ['', Validators.required],
      estTermine: [false],
      dateDebutSprint: ['', Validators.required],
      dateFinSprint: ['', Validators.required],
      etatSprint: ['En cours', Validators.required],
    });
  }
}
