import { RouterModule, Routes } from "@angular/router";
import { StartvoteComponent } from "./startvote.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";


const routes: Routes = [

    {path: 'startvote',component:StartvoteComponent ,data: { animation: 'layout' }}
  ];

  @NgModule({
    declarations: [StartvoteComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule, NgxDatatableModule]
  })
  export class StartvoteModule {}