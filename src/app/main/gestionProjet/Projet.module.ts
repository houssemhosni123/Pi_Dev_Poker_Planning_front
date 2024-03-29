import { NgModule } from "@angular/core";
import { AjouterProjetModule } from "./ajouter-projet/ajouter-projet.module";
import { AfficherProjetModule } from "./afficher-projet/afficher-projet.module";
import { ModfierProjetModule } from "./modfier-projet/modfier-projet.module";




@NgModule({
    declarations: [
    
  ],
    imports: [
        AjouterProjetModule,
        AfficherProjetModule,
        ModfierProjetModule
      ]
  })
  export class ProjetModule {
  }