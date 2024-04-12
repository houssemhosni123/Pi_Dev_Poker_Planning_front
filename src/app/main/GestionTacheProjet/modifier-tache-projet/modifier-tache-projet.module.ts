import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CommonModule } from '@angular/common';
import { ModifierTacheProjetComponent } from "./modifier-tache-projet.component";


const routes: Routes = [
    { path: 'ModifierTacheProjet/:id', component: ModifierTacheProjetComponent, data: { animation: 'layout' } }
];

@NgModule({
    declarations: [ModifierTacheProjetComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule,CommonModule, CoreCommonModule],
    exports: [ModifierTacheProjetComponent],
    providers: [] 
})
export class ModifierTacheProjetModule {}