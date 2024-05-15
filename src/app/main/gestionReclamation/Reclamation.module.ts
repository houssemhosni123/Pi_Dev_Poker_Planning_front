import { NgModule } from "@angular/core";
import { AfficherReclamationModule } from "./afficher-reclamation/afficher-reclamation.module";
import { AjouterReclamationModule } from "./ajouter-reclamation/ajouter-reclamation.module";
import { ModifiReclamationModule } from "./modfier-reclamation/modfier-reclamation.module";
import { AjouterReclamationComponent } from "./ajouter-reclamation/ajouter-reclamation.component";
import { AfficherReclamationComponent } from "./afficher-reclamation/afficher-reclamation.component";
import { reclamationStatModule } from "app/reclamation-stats-component/reclamationStat.module";
import { StatByUserModule } from "app/stat-by-user/stat-by-user.module";


@NgModule({
    declarations: [
      
    
  ],
    imports: [
      AfficherReclamationModule,
        AjouterReclamationModule,
        ModifiReclamationModule,
        reclamationStatModule ,      
          StatByUserModule,
        

       
      ]
  })
  export class ReclamationModule {}