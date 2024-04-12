// tache-technique-add.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TacheTechniqueAddComponent } from '../ajouter-tache-technique/ajouter-tache-technique.component';
import { RouterModule, Routes } from "@angular/router";
import { AfficherTacheTechniqueComponent } from '../afficher-tache-technique/afficher-tache-technique.component';
import{AfficherTacheTechniqueModule} from '../afficher-tache-technique/afficher-tache-technique.module'






const routes: Routes = [
  { path: 'AjouterTacheTechnique', component: TacheTechniqueAddComponent, data: { animation: 'layout' } }
];

@NgModule({
  declarations: [
    TacheTechniqueAddComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    TacheTechniqueAddComponent
  ]
})
export class TacheTechniqueAddModule { }
