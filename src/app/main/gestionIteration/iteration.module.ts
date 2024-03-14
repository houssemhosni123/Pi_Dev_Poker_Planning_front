import { NgModule } from "@angular/core";

import { AfficherIterationModule } from "./afficher-iteration/afficher-iteration.module";
import { AjouterIterationModule } from "./ajouter-iteration/ajouter-iteration.module";
import { ModifierIterationModule } from "./modfier-iteration/modfier-iteration.module";
import { FrontIterationComponent } from './FrontIteration/front-iteration/front-iteration.component';
import { FrontModuleModule } from "./FrontIteration/front-iteration/front-module.module";
import { EstimationShowComponent } from './estimation-show/estimation-show.component';
import { EstimationShowModule } from "./estimation-show/estimation-show.module";
import { VoteEstimationsComponent } from './vote-estimations/vote-estimations.component';
import { VoteEstimationsModule } from "./vote-estimations/vote-estimations.module";


@NgModule({
    declarations: [
    
  
   
  
    
  
    
  ],
    imports: [
        AfficherIterationModule,
        AjouterIterationModule,
        ModifierIterationModule,
        FrontModuleModule,
        EstimationShowModule,
        VoteEstimationsModule
      ]
  })
  export class IterationModule {}