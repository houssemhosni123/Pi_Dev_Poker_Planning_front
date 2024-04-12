import { NgModule } from "@angular/core";
import { ModfierSprintModule } from "./modfier-sprint/modfier-sprint.module";
import { AjouterSprintModule } from "./ajouter-sprint/ajouter-sprint.module";
import { AfficherSprintModule } from "./afficher-sprint/afficher-sprint.module";

@NgModule({
  declarations: [
    // Add your components, directives, and pipes here
  ],
  imports: [
    ModfierSprintModule,
    AjouterSprintModule,
    AfficherSprintModule
  ],
  exports: [
    // Add the modules you want to export here
  ]
})
export class SprintModule {}