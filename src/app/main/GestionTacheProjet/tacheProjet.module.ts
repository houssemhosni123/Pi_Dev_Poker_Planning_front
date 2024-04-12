import { NgModule } from "@angular/core";
import { AjouterTacheProjetModule } from "./ajouter-tache-projet/ajouter-tache-projet.module";
import { DatatablesModule } from "./datatables/datatables.module";
import { ModifierTacheProjetModule } from "./modifier-tache-projet/modifier-tache-projet.module";

@NgModule({
  declarations: [  
  ],
  imports: [
    ModifierTacheProjetModule,
    AjouterTacheProjetModule,
    DatatablesModule
  ],
  exports: [
    // Add the modules you want to export here
  ]
})
export class TacheProjetModule {}