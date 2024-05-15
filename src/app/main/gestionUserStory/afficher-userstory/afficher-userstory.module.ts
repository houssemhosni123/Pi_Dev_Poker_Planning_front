import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { AfficherUserstoryComponent } from "./afficher-userstory.component";
import { TableModule } from 'app/main/tables/table/table.module';
import { DatatablesModule } from "app/main/GestionTacheProjet/datatables/datatables.module";
const routes: Routes = [
    {path: 'AfficherUserStroy',component: AfficherUserstoryComponent,data: { animation: 'layout' }},
   
  ];
  
  @NgModule({
    declarations: [AfficherUserstoryComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule,DatatablesModule, TableModule]
  })
  export class AfficherUserstoryModule {}