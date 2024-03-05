import { NgModule } from "@angular/core";
import { AfficherReunionModule } from "./afficher-reunion/afficher-reunion.module";
import { AjouterReunionComponent } from "./ajouter-reunion/ajouter-reunion.component";
import { ModfierReunionModule } from "./modfier-reunion/modfier-reunion.module";
import { AjouterReunionModule } from "./ajouter-reunion/ajouter-reunion.module";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { FlatpickrModule } from "../forms/form-elements/flatpickr/flatpickr.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { calendarModuleNew } from "app/calendar/calendar.module";

@NgModule({
    declarations: [
    
  ],
    imports: [
        AfficherReunionModule,
        AjouterReunionModule,
        ModfierReunionModule,
        Ng2FlatpickrModule,
        NgbModule,
        FlatpickrModule,
        ReactiveFormsModule,
        calendarModuleNew
        

      ]
      
  })
  export class ReunionModule {}