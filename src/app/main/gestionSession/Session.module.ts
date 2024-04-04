import { NgModule } from "@angular/core";
import { AfficherSessionModule } from "./afficher-session/afficher-session.module";
import { AjouterSessionModule } from "./ajouter-session/ajouter-session.module";
import { ModifierSessionModule } from "./modfier-session/modfier-session.module";

@NgModule({
    declarations: [
    
  ],
    imports: [
        AfficherSessionModule,
        AjouterSessionModule,
        ModifierSessionModule
      ]
  })
  export class SessionModule {}