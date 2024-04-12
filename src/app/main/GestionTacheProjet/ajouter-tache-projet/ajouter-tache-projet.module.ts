import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CommonModule } from '@angular/common';
import { AjouterTacheProjetComponent } from "./ajouter-tache-projet.component";


const routes: Routes = [
    {path: 'AjouterTacheProjet',component: AjouterTacheProjetComponent,data: { animation: 'layout' }},
];

@NgModule({
    declarations: [AjouterTacheProjetComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule,CommonModule, CoreCommonModule],
    exports: [AjouterTacheProjetComponent],
    providers: [] 
})
export class AjouterTacheProjetModule {}