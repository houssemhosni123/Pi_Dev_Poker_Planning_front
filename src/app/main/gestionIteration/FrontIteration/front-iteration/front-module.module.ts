import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontIterationComponent } from './front-iteration.component';
import { FormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


const routes: Routes = [
  {path: 'FrontIteration',component: FrontIterationComponent,data: { animation: 'layout' }}
];
@NgModule({
  declarations: [FrontIterationComponent],
  imports: [
     ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule ,RouterModule.forChild(routes) 
  ]
})
export class FrontModuleModule { }
