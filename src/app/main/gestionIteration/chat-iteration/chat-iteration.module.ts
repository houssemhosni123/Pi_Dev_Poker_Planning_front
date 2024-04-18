import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatIterationComponent } from './chat-iteration.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { FormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';



const routes: Routes = [
  {path: 'chatIteration',component:  ChatIterationComponent,data: { animation: 'layout' }}
];
@NgModule({
  declarations: [ChatIterationComponent],
  imports: [
    RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule
  ]
})
export class ChatIterationModule { }
