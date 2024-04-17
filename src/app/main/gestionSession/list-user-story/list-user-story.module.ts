import { RouterModule, Routes } from "@angular/router";
import { ListUserStoryComponent } from "./list-user-story.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";


const routes: Routes = [
    {path: 'ListUserStory',component: ListUserStoryComponent,data: { animation: 'layout' }}
  ];

  @NgModule({
    declarations: [ListUserStoryComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
  })
  export class ListUserStoryModule {}