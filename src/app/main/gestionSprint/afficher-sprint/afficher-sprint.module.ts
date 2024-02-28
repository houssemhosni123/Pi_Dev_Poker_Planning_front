import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { AfficherSprintComponent } from "./afficher-sprint.component";
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {path: 'AfficherSprint',component: AfficherSprintComponent,data: { animation: 'layout' }},
];

@NgModule({
    declarations: [AfficherSprintComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule,CommonModule, CoreCommonModule],
    exports: [AfficherSprintComponent],
    providers: [] 
})
export class AfficherSprintModule {}