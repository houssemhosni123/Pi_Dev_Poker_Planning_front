import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VoteSessionComponent } from "./vote-session.component";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { CoreCommonModule } from "@core/common.module";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


const routes: Routes = [

    {path: 'vote',component:VoteSessionComponent ,data: { animation: 'layout' }}
  ];

  @NgModule({
    declarations: [VoteSessionComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule, NgxDatatableModule]
  })
  export class VoteSessionModule {}