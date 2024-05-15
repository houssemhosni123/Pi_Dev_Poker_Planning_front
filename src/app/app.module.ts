import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

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
//import { fakeBackendProvider } from 'app/auth/helpers'; // used to create fake backend
//import { JwtInterceptor, ErrorInterceptor } from 'app/auth/helpers';
import { AppComponent } from 'app/app.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ContextMenuComponent } from 'app/main/extensions/context-menu/context-menu.component';
import { AnimatedCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';
import { BasicCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';
import { SubMenuCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';
import { Role } from './auth/models';
import { ModfierSprintBacklogComponent } from './main/gestionSprintBacklog/modfier-sprint-backlog/modfier-sprint-backlog.component';
import { SprintBacklogListComponent } from './main/gestionSprintBacklog/afficher-sprint-backlog/afficher-sprint-backlog.component';
import { AjoutSprintBacklogComponent } from './main/gestionSprintBacklog/ajouter-sprint-backlog/ajouter-sprint-backlog.component';
import { AfficherSprintComponent } from './main/gestionSprint/afficher-sprint/afficher-sprint.component';
import { ModfierSprintComponent } from './main/gestionSprint/modfier-sprint/modfier-sprint.component';
import { AfficherSprintBacklogsComponent } from './main/gestionSprintBacklog/afficher-sprint-backlogs/afficher-sprint-backlogs.component';
import { TacheTechniqueAddComponent } from './main/gestionTacheTechnique/ajouter-tache-technique/ajouter-tache-technique.component';
import { AjouterSprintModule } from './main/gestionSprint/ajouter-sprint/ajouter-sprint.module';
import { AfficherSprintModule } from './main/gestionSprint/afficher-sprint/afficher-sprint.module';
import { ModfierSprintModule } from './main/gestionSprint/modfier-sprint/modfier-sprint.module';
import { TacheTechniqueAddModule } from './main/gestionTacheTechnique/ajouter-tache-technique/tache-technique-add.module';
import { AfficherTacheTechniqueModule } from './main/gestionTacheTechnique/afficher-tache-technique/afficher-tache-technique.module';
import { ModifierTacheTechniqueModule } from './main/gestionTacheTechnique/modifier-tache-technique/modifier-tache-technique.module';
import { CommonModule } from '@angular/common';
import { SprintService } from './Services/gestionSprintServices/SprintService';
import { SprintBacklogService } from './Services/gestionSprintBacklogServices/SprintBacklogServices';
import { ModfierReclamationComponent } from './main/gestionReclamation/modfier-reclamation/modfier-reclamation.component';
import { ModfierReunionComponent } from './main/gestionReunion/modfier-reunion/modfier-reunion.component';
import { ModfierSessionComponent } from './main/gestionSession/modfier-session/modfier-session.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LayoutModule } from './layout/layout.module';
import { ReunionDetailComponent } from './reunion-detail/reunion-detail.component';
import { RejoindreComponent } from './main/gestionSession/rejoindre/rejoindre.component';
import { AfficherProjetComponent } from './main/gestionProjet/afficher-projet/afficher-projet.component';
import { AfficherUserstoryComponent } from './main/gestionUserStory/afficher-userstory/afficher-userstory.component';
import { AjouterProjetComponent } from './main/gestionProjet/ajouter-projet/ajouter-projet.component';
import { ModfierProjetComponent } from './main/gestionProjet/modfier-projet/modfier-projet.component';
import { AjouterUserstoryComponent } from './main/gestionUserStory/ajouter-userstory/ajouter-userstory.component';
import { ModfierUserstoryComponent } from './main/gestionUserStory/modfier-userstory/modfier-userstory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatistiquesComponent } from './main/gestionProjet/statistiques/statistiques.component';
/*import { AfficherProjetComponent } from './main/gestionProjet/afficher-projet/afficher-projet.component';
import { AjouterProjetComponent } from './main/gestionProjet/ajouter-projet/ajouter-projet.component';
import { ModfierProjetComponent } from './main/gestionProjet/modfier-projet/modfier-projet.component';
import { AfficherUserstoryComponent } from './main/gestionUserStory/afficher-userstory/afficher-userstory.component';
import { AjouterUserstoryComponent } from './main/gestionUserStory/ajouter-userstory/ajouter-userstory.component';
import { ModfierUserstoryComponent } from './main/gestionUserStory/modfier-userstory/modfier-userstory.component';
import { StatistiquesComponent } from './main/statistiques/statistiques.component';*/

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
    path: 'Feedback',
    loadChildren: () => import('./main/gestionFeedback/feed-back.module').then(m => m.FeedBackModule),
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
    path: 'Projet',
    loadChildren: () => import('./main/gestionProjet/Projet.module').then(m => m.ProjetModule),
    canActivate: [AuthGuard],
    // Only ProductOwner role allowed
  },
  {
    path: 'UserStory',
    loadChildren: () => import('./main/gestionUserStory/UserStory.module').then(m => m.UserStoryModule),
    canActivate: [AuthGuard],
     // Only ProductOwner role allowed
  },
  {
    path: 'Sprint',
    loadChildren: () => import('./main/gestionSprint/Sprint.module').then(m => m.SprintModule),
    canActivate: [AuthGuard],
    // Only ProductOwner role allowed
  },
  {
    path: 'TacheProjet',
    loadChildren: () => import('./main/GestionTacheProjet/tacheProjet.module').then(m => m.TacheProjetModule),
    canActivate: [AuthGuard],
    
  },
  {
    path: 'SprintBacklog',
    loadChildren: () => import('./main/gestionSprintBacklog/SprintBacklog.module').then(m => m.SprintBacklogModule),
    canActivate: [AuthGuard],
    // Only ProductOwner role allowed
  },
  
  {
    path: 'Session',
    loadChildren: () => import('./main/gestionSession/Session.module').then(m => m.SessionModule),
    canActivate: [AuthGuard],
     // Only ScrumMaster role allowed
  },
{ path: 'Rejoindre', component: RejoindreComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.developer] }  },
  {path: 'Session/:idSession/update',component:ModfierSessionComponent},
  {
    path: 'Reclamation',
    loadChildren: () => import('./main/gestionReclamation/Reclamation.module').then(m => m.ReclamationModule),
    canActivate: [AuthGuard]
  },
  { path: 'Reclamation/:id/update',component :  ModfierReclamationComponent },

  
  {
    path: 'Reunion',
    loadChildren: () => import('./main/gestionReunion/Reunion.module').then(m => m.ReunionModule),
    canActivate: [AuthGuard]
  },
  { path: 'Reunions/:id/update',component :  ModfierReunionComponent },
  {
    path: 'Iteration',
    loadChildren: () => import('./main/gestionIteration/iteration.module').then(m => m.IterationModule),
    canActivate: [AuthGuard],
    // Only Developer role allowed
  },
  { path: 'reunion-detail/:id', component: ReunionDetailComponent },
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
  { path: 'AfficherSprint', component: AfficherSprintComponent,
  canActivate: [AuthGuard],
   },

  { path: 'sprints/:id/update', component: ModfierSprintComponent,
  canActivate: [AuthGuard],
  },

  { path: 'sprintBacklog/:id/update', component: ModfierSprintBacklogComponent,
  canActivate: [AuthGuard],
  },

  { path: 'AfficherSprintBacklog', component: SprintBacklogListComponent,
  canActivate: [AuthGuard],
 },
  { path: 'ModifierSprintBacklog', component: ModfierSprintBacklogComponent ,
  canActivate: [AuthGuard],
    },
  { path: 'AjouterSprintBacklog', component: AjoutSprintBacklogComponent ,
  canActivate: [AuthGuard],
   },
  { path: 'AfficherSprintBacklogs/:sprintId', component: AfficherSprintBacklogsComponent,
   },

  { path: 'AjouterTacheTechnique', component: TacheTechniqueAddComponent ,
  },
  { path: "projets", component: AfficherProjetComponent },

  { path: 'userstorys', component: AfficherUserstoryComponent },
  { path: "create-projet", component: AjouterProjetComponent },
  { path: "edit-projet/:idProjet", component: ModfierProjetComponent },
  { path: 'projet/:idProjet', component: AjouterUserstoryComponent },
  { path: 'edit-userstory/:IdUserStory', component: ModfierUserstoryComponent },
  {
    path: "edit-user-story/:IdUserStory",
    component: ModfierUserstoryComponent,
  },
  { path: "statistiques", component: StatistiquesComponent },
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
        ContentHeaderModule,
        FormsModule, // Add FormsModule here
        ReactiveFormsModule
    ],
    providers: [
      SprintService,
      SprintBacklogService,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {}