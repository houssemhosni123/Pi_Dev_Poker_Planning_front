import { NgModule } from "@angular/core";
import { DatatablesModule } from "./datatables/datatables.module";
import { ModifierTacheProjetModule } from "./modifier-tache-projet/modifier-tache-projet.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatDialogModule } from "@angular/material/dialog";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { AjouterTacheProjetModule } from "./ajouter-tache-projet/ajouter-tache-projet.module";

@NgModule({
  declarations: [  
  
    UserDetailsComponent
  ],
  imports: [
    ModifierTacheProjetModule,
    AjouterTacheProjetModule,
    DatatablesModule,
    NgxQRCodeModule,

  ],
  exports: [

    // Add the modules you want to export here
  ]
})
export class TacheProjetModule {}