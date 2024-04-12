import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import { EventReff } from './model';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';

import {
  dateTimeSnippetCode,
  
} from 'app/main/forms/form-elements/flatpickr/flatpickr.snippetcode';
import { User } from 'app/auth/models';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajouter-reunion',
  templateUrl: './ajouter-reunion.component.html',
  styleUrls: ['./ajouter-reunion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AjouterReunionComponent implements OnInit {

  newEvent!: EventReff;
  date1!: Date;
  date2!: Date;
  users: string[] = [];
selectedUserNames: string[] = [];

  public dateTimeOptions: FlatpickrOptions = {
    altInput: true,
    enableTime: true
  };


  public _dateTimeSnippetCode = dateTimeSnippetCode;


  constructor(private router: Router,private monservice: ReunionService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.newEvent = new EventReff();


  

this.loadUsers();    }

  
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
  console.log(this.date1);
  var dateDebut = new Date(this.date1);
  console.log(dateDebut);
  var dateFin = new Date(this.date2);
  const formattedDate1 = this.datePipe.transform(dateDebut, "yyyy-MM-dd'T'HH:mm:ss");
  console.log("Date de début formatée:", formattedDate1);

  const formattedDate2 = this.datePipe.transform(dateFin, "yyyy-MM-dd'T'HH:mm:ss");
  this.newEvent.DateDebut_Reunion = formattedDate1;
  this.newEvent.DateFin_Reunion = formattedDate2;
  console.log("Nouvelle réunion:", this.newEvent);

  // Afficher les noms d'utilisateurs sélectionnés
  console.log("Utilisateurs sélectionnés:", this.selectedUserNames);

  this.monservice.addUserToReunion(this.newEvent, this.selectedUserNames).subscribe(
    response => {
      console.log(response); // Gérer la réponse de votre requête
      // Navigate to '/Reunion/afficher' after successfully adding the event
      this.router.navigateByUrl('Reunion/AfficherReunions');
    },
    error => {
      console.error(error); // Gérer les erreurs de votre requête
    }
  );
}

    
  




}