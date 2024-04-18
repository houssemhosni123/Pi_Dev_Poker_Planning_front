import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedBackRoutingModule } from './feed-back-routing.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SurveysComponent } from './surveys/surveys.component';
import { QuestionsComponent } from './questions/questions.component';
import { FeedBacksComponent } from './feed-backs/feed-backs.component';
import { AjoutComponentComponent } from './ajout-component/ajout-component.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { FeedbackfrontComponent } from './feedbackfront/feedbackfront.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { ChartsModule } from 'ng2-charts';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


@NgModule({
  declarations: [
    
    SurveysComponent,
    QuestionsComponent,
    FeedBacksComponent,
    AjoutComponentComponent,
    AddFeedbackComponent,
    AddSurveyComponent,
    FeedbackfrontComponent,
    StarRatingComponent,
    StatistiqueComponent
  ],
  imports: [
    CommonModule,
    FeedBackRoutingModule,
    FormsModule,
    NgSelectModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ContentHeaderModule,
    CardSnippetModule,
    ChartsModule,
    Ng2FlatpickrModule,
    
    NgbModule
    
    
  ]
})
export class FeedBackModule { }
