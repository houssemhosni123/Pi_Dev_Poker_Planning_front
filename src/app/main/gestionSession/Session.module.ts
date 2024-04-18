import { NgModule } from "@angular/core";
import { AfficherSessionModule } from "./afficher-session/afficher-session.module";
import { AjouterSessionModule } from "./ajouter-session/ajouter-session.module";
import { ModifierSessionModule } from "./modfier-session/modfier-session.module";

import {NgxPaginationModule} from 'ngx-pagination';
import { VoteSessionModule } from "./vote-session/vote-session.module";
import { ListProjectModule } from "./list-project/list-project.module";
import { UserForProjectComponent } from './user-for-project/user-for-project.component';
import { UserForProjectModule } from "./user-for-project/user-for-project.module";
import { RejoindreModule } from "./rejoindre/rejoindre.module";
import { StartvoteModule } from "./startvote/startvote.module";
import { ListUserStoryModule } from "./list-user-story/list-user-story.module";






@NgModule({
    declarations: [
      
 
  ],
    imports: [
        AfficherSessionModule,
        AjouterSessionModule,
        ModifierSessionModule,
        VoteSessionModule,
        NgxPaginationModule,
        UserForProjectModule,
        StartvoteModule,
        ListUserStoryModule

 
        
        //MatPaginatorModule
      ]
  })
  export class SessionModule {}