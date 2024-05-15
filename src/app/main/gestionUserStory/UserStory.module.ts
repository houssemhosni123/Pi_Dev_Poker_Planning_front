import { NgModule } from "@angular/core";
import { ModfierUserstoryModule } from "./modfier-userstory/modfier-userstory.module";
import { AfficherUserstoryModule } from "./afficher-userstory/afficher-userstory.module";
import { AjouterUserstoryModule } from "./ajouter-userstory/ajouter-userstory.module";
import { FormsModule } from "@angular/forms";




@NgModule({
    declarations: [

  ],
    imports: [
        AfficherUserstoryModule,
        ModfierUserstoryModule,
        AjouterUserstoryModule,
        FormsModule

        
      ]
  })
  export class UserStoryModule {}