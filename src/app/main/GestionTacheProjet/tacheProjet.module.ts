import { NgModule } from "@angular/core";
import { ModifierTacheProjetModule } from "./modifier-tache-projet/modifier-tache-projet.module";
import { AfficherTacheProjetModule } from "./afficher-tache-projet/afficher-tache-projet.module";
import { AjouterTacheProjetModule } from "./ajouter-tache-projet/ajouter-tache-projet.module";

@NgModule({
  declarations: [
    // Add your components, directives, and pipes here
  ],
  imports: [
    ModifierTacheProjetModule,
    AjouterTacheProjetModule,
    AfficherTacheProjetModule
  ],
  exports: [
    // Add the modules you want to export here
  ]
})
export class TacheProjetModule {}