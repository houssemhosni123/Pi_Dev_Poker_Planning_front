import { NgModule } from "@angular/core";

import { AfficherIterationModule } from "./afficher-iteration/afficher-iteration.module";
import { AjouterIterationModule } from "./ajouter-iteration/ajouter-iteration.module";
import { ModifierIterationModule } from "./modfier-iteration/modfier-iteration.module";


@NgModule({
    declarations: [
    
  ],
    imports: [
        AfficherIterationModule,
        AjouterIterationModule,
        ModifierIterationModule
      ]
  })
  export class IterationModule {}