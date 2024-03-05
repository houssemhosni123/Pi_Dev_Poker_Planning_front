import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';


import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { ContextMenuModule } from '@ctrl/ngx-rightclick';

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { coreConfig } from 'app/app-config';
import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { fakeBackendProvider } from 'app/auth/helpers'; // used to create fake backend
import { JwtInterceptor, ErrorInterceptor } from 'app/auth/helpers';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { AjouterSprintModule } from './main/gestionSprint/ajouter-sprint/ajouter-sprint.module';


import { ContextMenuComponent } from 'app/main/extensions/context-menu/context-menu.component';
import { AnimatedCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';
import { BasicCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';
import { SubMenuCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';
import { AjouterReclamationComponent } from './main/gestionReclamation/ajouter-reclamation/ajouter-reclamation.component';
import { ModfierReclamationComponent } from './main/gestionReclamation/modfier-reclamation/modfier-reclamation.component';
import { AfficherReclamationComponent } from './main/gestionReclamation/afficher-reclamation/afficher-reclamation.component';
import { AfficherReunionComponent } from './main/gestionReunion/afficher-reunion/afficher-reunion.component';
import { ModfierReunionComponent } from './main/gestionReunion/modfier-reunion/modfier-reunion.component';
import { AjouterReunionComponent } from './main/gestionReunion/ajouter-reunion/ajouter-reunion.component';
import { AfficherIterationComponent } from './main/gestionIteration/afficher-iteration/afficher-iteration.component';
import { AjouterIterationComponent } from './main/gestionIteration/ajouter-iteration/ajouter-iteration.component';
import { ModfierIterationComponent } from './main/gestionIteration/modfier-iteration/modfier-iteration.component';
import { AjouterFeedbackComponent } from './main/gestionFeedback/ajouter-feedback/ajouter-feedback.component';
import { AfficherFeedbackComponent } from './main/gestionFeedback/afficher-feedback/afficher-feedback.component';
import { ModfierFeedbackComponent } from './main/gestionFeedback/modfier-feedback/modfier-feedback.component';
import { AfficherProjetComponent } from './main/gestionProjet/afficher-projet/afficher-projet.component';
import { AjouterProjetComponent } from './main/gestionProjet/ajouter-projet/ajouter-projet.component';
import { ModfierProjetComponent } from './main/gestionProjet/modfier-projet/modfier-projet.component';
import { AjouterUserstoryComponent } from './main/gestionUserStory/ajouter-userstory/ajouter-userstory.component';
import { AfficherUserstoryComponent } from './main/gestionUserStory/afficher-userstory/afficher-userstory.component';
import { ModfierUserstoryComponent } from './main/gestionUserStory/modfier-userstory/modfier-userstory.component';
import { ModfierSprintComponent } from './main/gestionSprint/modfier-sprint/modfier-sprint.component';
import { AjouterSprintComponent } from './main/gestionSprint/ajouter-sprint/ajouter-sprint.component';
import { AfficherSprintComponent } from './main/gestionSprint/afficher-sprint/afficher-sprint.component';
import { SprintBacklogListComponent } from './main/gestionSprintBacklog/afficher-sprint-backlog/afficher-sprint-backlog.component';
import { AjoutSprintBacklogComponent } from './main/gestionSprintBacklog/ajouter-sprint-backlog/ajouter-sprint-backlog.component';
import { ModfierSprintBacklogComponent } from './main/gestionSprintBacklog/modfier-sprint-backlog/modfier-sprint-backlog.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AfficherSprintModule } from './main/gestionSprint/afficher-sprint/afficher-sprint.module';
import { ModfierSprintModule } from './main/gestionSprint/modfier-sprint/modfier-sprint.module';
import { SprintService } from './Services/gestionSprintServices/SprintService';
import { SprintBacklogService } from './Services/gestionSprintBacklogServices/SprintBacklogServices';
import { AfficherSprintBacklogsComponent } from './main/gestionSprintBacklog/afficher-sprint-backlogs/afficher-sprint-backlogs.component';
import { TacheTechniqueAddComponent } from './main/gestionTacheTechnique/ajouter-tache-technique/ajouter-tache-technique.component';
import { ModifierTacheTechniqueComponent } from './main/gestionTacheTechnique/modifier-tache-technique/modifier-tache-technique.component';
import{TacheTechniqueAddModule} from './main/gestionTacheTechnique/ajouter-tache-technique/tache-technique-add.module'
import{AfficherTacheTechniqueModule} from './main/gestionTacheTechnique/afficher-tache-technique/afficher-tache-technique.module'

import{ModifierTacheTechniqueModule} from './main/gestionTacheTechnique/modifier-tache-technique/modifier-tache-technique.module'
import { TableauBordModule } from './main/tableau-bord/tableau-bord.module';
import { TableauBordComponent } from './main/tableau-bord/tableau-bord.component';




//import { HouseModule } from './Modules/house/house.module';
const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('./main/ui/ui.module').then(m => m.UIModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'components',
    loadChildren: () => import('./main/components/components.module').then(m => m.ComponentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'extensions',
    loadChildren: () => import('./main/extensions/extensions.module').then(m => m.ExtensionsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forms',
    loadChildren: () => import('./main/forms/forms.module').then(m => m.FormsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'User',
    loadChildren: () => import('./main/gestionUser/gestionUser.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Session',
    loadChildren: () => import('./main/gestionSession/Session.module').then(m => m.SessionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Reclamation',
    loadChildren: () => import('./main/gestionReclamation/Reclamation.module').then(m => m.ReclamationModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'Reunion',
    loadChildren: () => import('./main/gestionReunion/Reunion.module').then(m => m.ReunionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Iteration',
    loadChildren: () => import('./main/gestionIteration/iteration.module').then(m => m.IterationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Feedback',
    loadChildren: () => import('./main/gestionFeedback/feedback.module').then(m => m.FeedbackModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Projet',
    loadChildren: () => import('./main/gestionProjet/Projet.module').then(m => m.ProjetModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'UserStory',
    loadChildren: () => import('./main/gestionUserStory/UserStory.module').then(m => m.UserStoryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Sprint',
    loadChildren: () => import('./main/gestionSprint/Sprint.module').then(m => m.SprintModule),
    canActivate: [AuthGuard]
  },


  { path: 'AfficherSprint', component: AfficherSprintComponent },

  { path: 'sprints/:id/update', component: ModfierSprintComponent},

  { path: 'sprintBacklog/:id/update', component: ModfierSprintBacklogComponent },

  { path: 'AfficherSprintBacklog', component: SprintBacklogListComponent },
  { path: 'ModifierSprintBacklog', component: ModfierSprintBacklogComponent },
  { path: 'AjouterSprintBacklog', component: AjoutSprintBacklogComponent },
  { path: 'AfficherSprintBacklogs/:sprintId', component: AfficherSprintBacklogsComponent },

  { path: 'AjouterTacheTechnique', component: TacheTechniqueAddComponent },
  
  {path: 'TableauBord',component: TableauBordComponent},





  
  



  {
    path: 'SprintBacklog',
    loadChildren: () => import('./main/gestionSprintBacklog/SprintBacklog.module').then(m => m.SprintBacklogModule),
    canActivate: [AuthGuard]
  },
  
  
  
  
  {
    path: 'tables',
    loadChildren: () => import('./main/tables/tables.module').then(m => m.TablesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'charts-and-maps',
    loadChildren: () => import('./main/charts-and-maps/charts-and-maps.module').then(m => m.ChartsAndMapsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard/ecommerce',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
    declarations: [
        AppComponent,
        ContextMenuComponent,
        BasicCustomContextMenuComponent,
        AnimatedCustomContextMenuComponent,
        SubMenuCustomContextMenuComponent,
        AfficherSprintBacklogsComponent,
       
        
       

        
       
        
        
        
        
        
        
        
        
        
        
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AjouterSprintModule,
        CommonModule,
        AfficherSprintModule,
        ModfierSprintModule,
        TacheTechniqueAddModule,
        AfficherTacheTechniqueModule,
        ModifierTacheTechniqueModule,
       
        
       
        
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'legacy'
        }),
        NgbModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),
        ContextMenuModule,
        CoreModule.forRoot(coreConfig),
        CoreCommonModule,
        CoreSidebarModule,
        CoreThemeCustomizerModule,
        CardSnippetModule,
        LayoutModule,
        ContentHeaderModule
    ],
    providers: [
      SprintService,
      SprintBacklogService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
