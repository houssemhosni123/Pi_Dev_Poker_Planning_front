import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { StartvoteComponent } from '../startvote/startvote.component';

@Component({
  selector: 'app-rejoindre',
  templateUrl: './rejoindre.component.html',
  styleUrls: ['./rejoindre.component.scss']
})
export class RejoindreComponent implements OnInit {
  sessionId: string;
  sessionCode: string;
  validationMessage: string;
  startvotePath = { path: 'startvote', component: StartvoteComponent, data: { animation: 'layout' } };

  constructor(private sessionService: sessionservice, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Récupérer les paramètres de l'URL
      this.sessionId = params['idSession'];
      this.sessionCode = params['codeSession'];
    });
  }

  validateSessionAndNavigate(): void {
    if (!this.sessionId || !this.sessionCode) {
      console.log("Veuillez saisir l'ID de session et le code de session.");
      return;
    }

    const idSession = parseInt(this.sessionId, 10);
    this.sessionService.validateSessionCode(idSession, this.sessionCode).subscribe(
      response => {
        console.log(response);
        this.navigateToStartVote();
        if (response === 'Code valide') {
          this.validationMessage = response;
        }
      },
      error => {
        console.error(error);
        this.validationMessage = 'Code invalide';
      }
    );
  }

  navigateToStartVote(): void {
    this.router.navigate(['/Session/startvote'], { queryParams: { idSession: this.sessionId, codeSession: this.sessionCode } });  }
  
}
