    import { NgModule } from "@angular/core";
    import { FormsModule } from "@angular/forms";
    import { Router, RouterModule, Routes } from "@angular/router";
    import { CoreCommonModule } from "@core/common.module";
    import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
    import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
    import { ReclamationStatsComponent } from "./reclamation-stats-component.component";

    const routes: Routes = [
        {path: 'AfficherCharts',component: ReclamationStatsComponent,data: { animation: 'layout' }}
    ];
    
    @NgModule({
        declarations: [ReclamationStatsComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
    })
    export class reclamationStatModule {
        
    constructor(private router: Router) { }

    navigateToAfficherReclamation(): void {
        this.router.navigate(['/AfficherReclamation']);
    }
    }