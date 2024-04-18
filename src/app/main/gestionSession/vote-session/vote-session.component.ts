import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SelectionType } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vote-session',
  templateUrl: './vote-session.component.html',
  styleUrls: ['./vote-session.component.scss']
})
export class VoteSessionComponent implements OnInit {
  Listproject: any[] = [];
  selectedProject: string | undefined;

  constructor(private sessionService: sessionservice, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getListProject();
    
  }

  getListProject(){
    this.sessionService.getListProject().subscribe(
      res =>{
        console.log(res);
      this.Listproject = res;
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }
  
  

  navigateToUserForProject() {
    if (this.selectedProject) {
      const queryParams = { nomSession: this.route.snapshot.queryParams['nomSession'] };
      this.router.navigate(['/Session/ListUserForProject', this.selectedProject], { queryParams: queryParams });
    }
  }
  

 
}
  




