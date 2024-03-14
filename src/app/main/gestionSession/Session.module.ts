import { NgModule } from "@angular/core";
import { AfficherSessionModule } from "./afficher-session/afficher-session.module";
import { AjouterSessionModule } from "./ajouter-session/ajouter-session.module";
import { ModifierSessionModule } from "./modfier-session/modfier-session.module";

import {NgxPaginationModule} from 'ngx-pagination';
import { VoteSessionModule } from "./vote-session/vote-session.module";
import { PageVoteModule } from "./page-vote/page-vote.module";



@NgModule({
    declarations: [
      
      
  
    
                    
  
  ],
    imports: [
        AfficherSessionModule,
        AjouterSessionModule,
        ModifierSessionModule,
        VoteSessionModule,
        PageVoteModule, 
        NgxPaginationModule,

 
        
        //MatPaginatorModule
      ]
  })
  export class SessionModule {}