import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';

@Component({
  selector: 'app-modfier-session',
  templateUrl: './modfier-session.component.html',
  styleUrls: ['./modfier-session.component.scss']
})
export class ModfierSessionComponent implements OnInit {
  validationForm!: FormGroup;
  idSession: any;
  sessionData: any;

  constructor(private SessionService: sessionservice,
    private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idSession = this.activatedRoute.snapshot.params['idSession'];
    // Vérifiez s'il y a des données de session passées en tant qu'état
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.sessionData = navigation.extras.state.sessionData;
      this.initForm();
    } else {
      // Si aucune donnée n'est passée, récupérez les données de la session normalement
      this.SessionService.getSessionbyId(this.idSession).subscribe((data) => {
        this.sessionData = data;
        this.initForm();
      });
    }
  }

  initForm() {
    this.validationForm = this.fb.group({
      nomSession: [this.sessionData.nomSession, Validators.required],
      description: [this.sessionData.description, Validators.required],
      dateEtHeureDebut: [this.sessionData.dateEtHeureDebut, Validators.required],
      dateEtHeureFin: [this.sessionData.dateEtHeureFin, Validators.required],
      type: [this.sessionData.type, Validators.required],
      statut: [this.sessionData.statut, Validators.required],
    });
  }

  updateSession() {
    this.SessionService.updateSession(this.idSession, this.validationForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/Session']);
    })
  }
}
