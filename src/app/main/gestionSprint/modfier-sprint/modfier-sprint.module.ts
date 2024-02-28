import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { ModfierSprintComponent } from "./modfier-sprint.component";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {path: 'ModfierSprint',component: ModfierSprintComponent,data: { animation: 'layout' }}
];

@NgModule({
    declarations: [ModfierSprintComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, ReactiveFormsModule, FormsModule, CoreCommonModule, CommonModule],
    exports: [ModfierSprintComponent]
})
export class ModfierSprintModule {}