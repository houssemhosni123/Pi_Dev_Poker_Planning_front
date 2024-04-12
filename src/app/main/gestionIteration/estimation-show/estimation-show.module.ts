import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstimationShowComponent } from './estimation-show.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { FormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  {path: 'ShowEstimations/:id',component: EstimationShowComponent ,data: { animation: 'layout' }}
];
@NgModule({
  declarations: [EstimationShowComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, CoreCommonModule,  ChartsModule]
})
export class EstimationShowModule { }
