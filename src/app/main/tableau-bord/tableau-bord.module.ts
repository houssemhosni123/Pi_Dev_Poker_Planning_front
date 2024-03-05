// tableau-bord/tableau-bord.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { TableauBordComponent } from './tableau-bord.component';
import { NgApexchartsModule } from 'ng-apexcharts';






const routes: Routes = [
    {path: 'TableauBord',component: TableauBordComponent,data: { animation: 'layout' }},
];

@NgModule({
  declarations: [TableauBordComponent],
  imports: [CommonModule, FormsModule,NgApexchartsModule, HttpClientModule,RouterModule.forChild(routes)],
  exports: [TableauBordComponent]
})
export class TableauBordModule {}
