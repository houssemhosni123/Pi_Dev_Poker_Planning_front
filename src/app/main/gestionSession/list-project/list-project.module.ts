import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ListProjectComponent } from './list-project.component';
import { UserForProjectModule } from '../user-for-project/user-for-project.module'; // Importez UserForProjectModule ici
import { UserForProjectComponent } from '../user-for-project/user-for-project.component';

const routes: Routes = [
  { path: 'ListProject', component: ListProjectComponent, data: { animation: 'layout' }},
  { path: 'ListUserForProject/:nom_Projet', component: UserForProjectComponent } // Utilisez :nom_Projet comme paramètre
];

@NgModule({
  declarations: [ListProjectComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule, UserForProjectModule], // Ajoutez UserForProjectModule ici
  exports: [RouterModule]
})
export class ListProjectModule {}
