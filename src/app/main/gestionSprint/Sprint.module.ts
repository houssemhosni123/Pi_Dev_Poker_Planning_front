import { NgModule } from "@angular/core";
import { ModfierSprintModule } from "./modfier-sprint/modfier-sprint.module";
import { AjouterSprintModule } from "./ajouter-sprint/ajouter-sprint.module";
import { AfficherSprintModule } from "./afficher-sprint/afficher-sprint.module";





@NgModule({
    declarations: [
    
  ],
    imports: [
        ModfierSprintModule,
        AjouterSprintModule,
        AfficherSprintModule
      ]
  })
  export class SprintModule {}