import { Component, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/angular';
import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponentNew {
  @ViewChild('calendar') calendarComponent: any;
  calendar: Calendar;
  constructor(private reunionservice: ReunionService) 
  {
    this.calendar = {} as Calendar;
   }
   ngOnInit(): void {
    this.reunionservice.getAllEvent().subscribe((sessions: any) => {
      const events = sessions.map((session: any) => ({
        title: session.titre_Reunion,
        start: session.DateDebut_Reunion,
        end: session. DateFin_Reunion ,
        lieu : session.lieu_Reunion
      }));
      
      this.calendar = new Calendar(this.calendarComponent.nativeElement, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: events
      });

      this.calendar.render();
    });
  }
}

