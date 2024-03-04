import { NgModule } from "@angular/core";

import { AfficherUserComponent } from './afficher-user/afficher-user.component';
import { AuthentificationModule } from "./Authentification/Authentification.module";


@NgModule({
    declarations: [
    
  
    AfficherUserComponent
  ],
    imports: [
        AuthentificationModule
      ]
  })
  export class UserModule {}