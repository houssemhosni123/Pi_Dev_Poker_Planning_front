
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherSprintBacklogsComponent } from './afficher-sprint-backlogs.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'



const routes: Routes = [
    {path: 'AfficherSprintBacklogs/:sprintId',component: AfficherSprintBacklogsComponent,data: { animation: 'layout' }}
  ];

@NgModule({
  declarations: [AfficherSprintBacklogsComponent],
  imports: [CommonModule,FormsModule,AfficherSprintBacklogsModule,BrowserModule],
  exports: [AfficherSprintBacklogsComponent], 
})
export class AfficherSprintBacklogsModule {}
