import { Component, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/angular';
import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Router } from '@angular/router';
import { EventReff } from 'app/main/gestionReunion/ajouter-reunion/model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponentNew {
  @ViewChild('calendar') calendarComponent: any;
  calendar: Calendar;

  constructor(private router: Router, private reunionservice: ReunionService) {}

  ngOnInit(): void {
    this.reunionservice.getAllEvent().subscribe((sessions: any) => {
      const events = sessions.map((session: any) => ({
        title: session.titre_Reunion,
        start: session.DateDebut_Reunion,
        end: session.DateFin_Reunion,
        reunion: session // Ajoutez la réunion complète à l'événement pour pouvoir l'utiliser plus tard
      }));

      this.calendar = new Calendar(this.calendarComponent.nativeElement, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: events,
        eventClick: this.handleEventClick.bind(this) // Gérer le clic sur un événement
      });

      this.calendar.render();
    });
  }

  // Méthode appelée lorsqu'un événement est cliqué
  handleEventClick(info: any): void {
    // Récupérer l'identifiant de la réunion à partir de l'événement
    const reunionId = info.event.extendedProps.reunion.idReunion;
    
    // Vérifier si l'identifiant de réunion est valide
    if (reunionId !== undefined && reunionId !== null) {
      // Naviguer vers la page de détails de la réunion avec l'ID de la réunion
      this.router.navigate(['/reunion-detail', reunionId]);
    } else {
      console.error('Erreur: Identifiant de réunion invalide');
    }
  }  
}
