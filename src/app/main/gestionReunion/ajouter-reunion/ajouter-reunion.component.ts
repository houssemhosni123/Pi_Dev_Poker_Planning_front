import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import { EventReff } from './model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TypePriorite } from './enum';

@Component({
  selector: 'app-ajouter-reunion',
  templateUrl: './ajouter-reunion.component.html',
  styleUrls: ['./ajouter-reunion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AjouterReunionComponent implements OnInit {

  newEvent: EventReff = new EventReff();
  users: string[] = [];
  selectedUserNames: string[] = [];
  TypePriorite = TypePriorite; // Stockez une référence à l'énumération ici
  

  constructor(private router: Router, private monservice: ReunionService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.monservice.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    );
  }

  redirigerVersListeSprints() {
    this.router.navigate(['Reunion/AfficherReunions']);
  }

  addEvent(): void {
    // Assume that the priority is already bound to newEvent.priorite_Reunion using ngModel in the template
    const priorite: TypePriorite = this.newEvent.priorite_Reunion;
  
    this.monservice.addUserToReunion(this.newEvent, this.selectedUserNames, priorite).subscribe(
      response => {
        console.log(response);
        this.router.navigateByUrl('Reunion/AfficherReunions');
      },
      error => {
        console.error(error);
      }
    );
  }}