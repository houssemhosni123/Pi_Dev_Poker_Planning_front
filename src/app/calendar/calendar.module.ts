import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CalendarComponentNew } from "./calendar.component";
import { FullCalendarModule } from "@fullcalendar/angular";

const routes: Routes = [
    {path: 'AfficherCalendar',component: CalendarComponentNew,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [CalendarComponentNew],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, FullCalendarModule,CardSnippetModule, FormsModule, CoreCommonModule]
  })
  export class calendarModuleNew {
    
  constructor(private router: Router) { }

  navigateToAfficherReunions(): void {
    this.router.navigate(['/AfficherReunions']);
  }
  }