// modifier-tache-technique.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ModifierTacheTechniqueComponent } from './modifier-tache-technique.component';

@NgModule({
  declarations: [
    ModifierTacheTechniqueComponent
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'TT/:id/tacheTechnique', component: ModifierTacheTechniqueComponent }, 
    ])
  ]
})
export class ModifierTacheTechniqueModule { }
