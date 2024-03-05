import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VoteEstimationsComponent } from './vote-estimations.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreCommonModule } from '@core/common.module';


const routes: Routes = [
  {path: 'ShowVotes',component: VoteEstimationsComponent,data: { animation: 'layout' }}
];
@NgModule({
  declarations: [ VoteEstimationsComponent],
  imports: [
    RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, CoreCommonModule
  ]
})
export class VoteEstimationsModule { }
