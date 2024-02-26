import { NgModule } from "@angular/core";

import { AfficherIterationModule } from "./afficher-iteration/afficher-iteration.module";
import { AjouterIterationModule } from "./ajouter-iteration/ajouter-iteration.module";
import { ModifierIterationModule } from "./modfier-iteration/modfier-iteration.module";
import { FrontIterationComponent } from './FrontIteration/front-iteration/front-iteration.component';
import { FrontModuleModule } from "./FrontIteration/front-iteration/front-module.module";


@NgModule({
    declarations: [
    
  
   
  ],
    imports: [
        AfficherIterationModule,
        AjouterIterationModule,
        ModifierIterationModule,
        FrontModuleModule
      ]
  })
  export class IterationModule {}