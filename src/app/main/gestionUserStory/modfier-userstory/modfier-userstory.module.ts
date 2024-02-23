import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { ModfierUserstoryComponent } from "./modfier-userstory.component";

const routes: Routes = [
    {path: 'ModifierUserStroy',component: ModfierUserstoryComponent,data: { animation: 'layout' }}
  ];
  
  @NgModule({
    declarations: [ModfierUserstoryComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
  })
  export class ModfierUserstoryModule {}