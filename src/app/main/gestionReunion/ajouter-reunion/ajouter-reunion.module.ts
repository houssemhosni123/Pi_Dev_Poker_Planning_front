import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { AjouterReunionComponent } from "./ajouter-reunion.component";
import flatpickr from "flatpickr";
import { FlatpickrComponent } from "app/main/forms/form-elements/flatpickr/flatpickr.component";
import { FlatpickrModule } from "app/main/forms/form-elements/flatpickr/flatpickr.module";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
   {path: 'AjouterReunion',component: AjouterReunionComponent,data: { animation: 'layout' }}
  ];
  /*
  @NgModule({
    declarations: [AjouterReunionComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule,FlatpickrModule,CoreCommonModule,Ng2FlatpickrModule]
  })*/
  @NgModule({
    declarations: [AjouterReunionComponent],
    imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, Ng2FlatpickrModule,FlatpickrModule,CoreCommonModule]
  })
  export class AjouterReunionModule {}