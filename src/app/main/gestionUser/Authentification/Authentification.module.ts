import { NgModule } from "@angular/core";
import { signupModule } from "./signup/signup.module";
import { LoginModule } from "./login/login.module";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";


@NgModule({
    declarations: [
    
  ],
    imports: [
        signupModule,LoginModule
      ]
  })
  export class AuthentificationModule {}