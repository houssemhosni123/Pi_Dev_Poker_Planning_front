import { NgModule } from "@angular/core";
import { AfficherReclamationModule } from "./afficher-reclamation/afficher-reclamation.module";
import { AjouterReclamationModule } from "./ajouter-reclamation/ajouter-reclamation.module";
import { ModifiReclamationModule } from "./modfier-reclamation/modfier-reclamation.module";
import { AjouterReclamationComponent } from "./ajouter-reclamation/ajouter-reclamation.component";
import { AfficherReclamationComponent } from "./afficher-reclamation/afficher-reclamation.component";
import { reclamationStatModule } from "app/reclamation-stats-component/reclamationStat.module";


@NgModule({
    declarations: [
      
    
  ],
    imports: [
      AfficherReclamationModule,
        AjouterReclamationModule,
        ModifiReclamationModule,
        reclamationStatModule
        

       
      ]
  })
  export class ReclamationModule {}