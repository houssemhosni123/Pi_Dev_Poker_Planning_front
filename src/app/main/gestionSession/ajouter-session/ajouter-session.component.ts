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

  deleteSession(idSession:any){
    this.SessionService.deleteSession(idSession).subscribe((res) => {
      this.router.navigate(['/Session/get']);
    })
  }  
  confirmDeleteSession(idSession: any): void {
    if (confirm('Are you sure you want to delete this session?')) {
      this.deleteSession(idSession);
    }
  }

  showInterfaceUpdate(idSession:any): void{
    this.router.navigate(['/Session', idSession,'update']);
  }

  getCssClassForStatus(status: string): string {
    switch (status) {
      case 'terminé': return 'bg-success'; // Couleur verte pour "terminé"
      case 'en cours': return 'bg-warning'; // Couleur orange pour "en cours"
      case 'annulé': return 'bg-danger'; // Couleur rouge pour "annulé"
      default: return '';
    }
  }
  
  
  
}
