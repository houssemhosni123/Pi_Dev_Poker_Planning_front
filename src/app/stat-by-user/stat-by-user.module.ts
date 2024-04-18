import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { StatByUserComponent } from "./stat-by-user.component";
import { ChartsModule } from "ng2-charts";

const routes: Routes = [
    {path: 'AfficherChartsPie',component: StatByUserComponent,data: { animation: 'layout' }}
];

@NgModule({
    declarations: [StatByUserComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, ChartsModule,CardSnippetModule, FormsModule, CoreCommonModule]
})
export class StatByUserModule {
    
constructor(private router: Router) { }

navigateToAfficherReclamation(): void {
    this.router.navigate(['/AfficherReclamation']);
}
}