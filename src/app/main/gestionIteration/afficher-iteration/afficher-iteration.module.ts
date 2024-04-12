  import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { AfficherIterationComponent } from "./afficher-iteration.component";
import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [
    {path: 'AfficherIteration',component: AfficherIterationComponent,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [AfficherIterationComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule, NgxPaginationModule]
  })
  export class AfficherIterationModule {}