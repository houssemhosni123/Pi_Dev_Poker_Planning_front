import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { AjouterSessionComponent } from "./ajouter-session.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
    {path: 'get',component: AjouterSessionComponent,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [AjouterSessionComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
  })
  export class AjouterSessionModule {}