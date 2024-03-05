// afficher-tache-technique.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TacheTechniqueService } from '../../../Services/gestionTacheTechnique/TacheTechniqueService';
import { AfficherTacheTechniqueComponent } from './afficher-tache-technique.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Importez le module FormsModule



@NgModule({
  declarations: [
    AfficherTacheTechniqueComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'afficher-taches-techniques', component: AfficherTacheTechniqueComponent },
    ]),
  ],
  providers: [
    TacheTechniqueService,
  ],
})
export class AfficherTacheTechniqueModule { }
