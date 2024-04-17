import { RouterModule, Routes } from "@angular/router";
import { UserForProjectComponent } from "./user-for-project.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";



const routes: Routes = [
  { path: 'ListUserForProject/:nom_Projet', component: UserForProjectComponent, data: { animation: 'layout' }}

];

@NgModule({
  declarations: [UserForProjectComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule, NgxDatatableModule]
})
export class UserForProjectModule{}
