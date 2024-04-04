import { NgModule } from "@angular/core";
import { ModfierSprintBacklogModule } from "./modfier-sprint-backlog/modfier-sprint-backlog.module";
import { AjouterSprintBacklogModule } from "./ajouter-sprint-backlog/ajouter-sprint-backlog.module";
import { AfficherSprintBacklogModule } from "./afficher-sprint-backlog/afficher-sprint-backlog.module";






@NgModule({
    declarations: [
    
  ],
    imports: [
        ModfierSprintBacklogModule,
        AjouterSprintBacklogModule,
        AfficherSprintBacklogModule
      ]
  })
  export class SprintBacklogModule {}