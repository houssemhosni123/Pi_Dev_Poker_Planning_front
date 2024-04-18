import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInLeft } from '@core/animations/core.animation';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';


@Component({
  selector: 'app-ajouter-session',
  templateUrl: './ajouter-session.component.html',
  styleUrls: ['./ajouter-session.component.scss'],
  animations: [fadeInLeft]
})
export class AjouterSessionComponent implements OnInit {

  sessions:any = [];
  showElement = false;
  selectedSession: string | undefined;

  constructor(private SessionService:sessionservice,private router: Router) { }

  ngOnInit(): void {
    this.getAllSession();
  }
  
  getAllSession(){
    this.SessionService.getAllSession().subscribe(
      res => {
        console.log(res)
        this.sessions = res;
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  deleteSession(idSession: any) {
    this.SessionService.deleteSession(idSession).subscribe(() => {
      this.refreshPage2();
    });
  }
  confirmDeleteSession(idSession: any): void {
    if (confirm('Are you sure you want to delete this session?')) {
      this.deleteSession(idSession);
     
    }
  
  }
  startSession(nomSession: string) {
    this.router.navigate(['/Session/vote'], { queryParams: { nomSession: nomSession } });
  }

  showInterfaceUpdate(idSession: any): void {
   
    this.SessionService.getSessionbyId(idSession).subscribe((data) => {
   
      this.router.navigate(['/Session', idSession, 'update'], { state: { sessionData: data } });
    });
  }

  refreshPage2() {
    this.router.navigateByUrl('/Session/get', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/Session/get']);
    });
  }
  
  getColorForStatus(statut: string): string {
    switch (statut) {
      case 'Terminer':
        return '#28c76f';
      case 'EnCours':
        return '#ff9f43';
      case 'Annuler':
        return '#ea5455';
      default:
        return 'inherit';
    }
  }

  

  
}
