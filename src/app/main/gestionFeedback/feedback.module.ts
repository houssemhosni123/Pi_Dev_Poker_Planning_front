import { NgModule } from "@angular/core";
import { ModfierFeedbackModule } from "./modfier-feedback/modfier-feedback.module";
import { AjouterFeedbackModule } from "./ajouter-feedback/ajouter-feedback.module";
import { AfficherFeedbackModule } from "./afficher-feedback/afficher-feedback.module";



@NgModule({
    declarations: [
    
  ],
    imports: [
        ModfierFeedbackModule,
        AjouterFeedbackModule,
        AfficherFeedbackModule
        
      ]
  })
  export class FeedbackModule {}