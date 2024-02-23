import { NgModule } from "@angular/core";
import { AfficherReclamationModule } from "./afficher-reclamation/afficher-reclamation.module";
import { AjouterReclamationModule } from "./ajouter-reclamation/ajouter-reclamation.module";
import { ModifiReclamationModule } from "./modfier-reclamation/modfier-reclamation.module";


@NgModule({
    declarations: [
    
  ],
    imports: [
        AfficherReclamationModule,
        AjouterReclamationModule,
        ModifiReclamationModule
      ]
  })
  export class ReclamationModule {}