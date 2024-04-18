import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { RejoindreComponent } from "./rejoindre.component";


const routes: Routes = [

    {path: 'Rejoindre',component:RejoindreComponent ,data: { animation: 'layout' }}
  ];

  @NgModule({
    declarations: [RejoindreComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule, NgxDatatableModule]
  })
  export class RejoindreModule {}


  