import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StatistiquesComponent } from "./statistiques.component";
import { FormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {path: 'ModifierStatistiques',component: StatistiquesComponent,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [StatistiquesComponent],
    imports: [RouterModule.forChild(routes),CommonModule , ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
  })
  export class statistiqueModule {}