import { NgModule } from "@angular/core";
import { AfficherReunionModule } from "./afficher-reunion/afficher-reunion.module";
import { AjouterReunionComponent } from "./ajouter-reunion/ajouter-reunion.component";
import { ModfierReunionModule } from "./modfier-reunion/modfier-reunion.module";
import { AjouterReunionModule } from "./ajouter-reunion/ajouter-reunion.module";

@NgModule({
    declarations: [
    
  ],
    imports: [
        AfficherReunionModule,
        AjouterReunionModule,
        ModfierReunionModule
      ]
  })
  export class ReunionModule {}