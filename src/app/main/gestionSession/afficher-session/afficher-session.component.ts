import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { addSession } from '../model/addSession';
import { customBadWordValidator } from './customBadWordValidator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-afficher-session',
  templateUrl: './afficher-session.component.html',
  styleUrls: ['./afficher-session.component.scss']
})
export class AfficherSessionComponent implements OnInit {
  validationForm!: FormGroup;
  @Input() total: number = 0;
  sessionss: any[] = [];
  p: number = 1;


  constructor(
    private SessionService:sessionservice,
    private fb:FormBuilder,private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.validationForm = this.fb.group({
        nomSession: ["", [Validators.required]],
        description: ["", [Validators.required]],
        dateEtHeureDebut: ["", Validators.required],
        dateEtHeureFin: ["", Validators.required],
        type: ["", Validators.required],
        statut: ["EnCours", Validators.required] 
      });
      
      // Ajout de la validation personnalisée pour la date de début
      this.validationForm.get('dateEtHeureDebut')?.setValidators([Validators.required, this.dateSupérieureOuÉgale.bind(this)]);
      // Revalidation lorsque la valeur change
      this.validationForm.get('dateEtHeureDebut')?.updateValueAndValidity();
    }
  
    // Fonction de validation personnalisée pour la date de début
    dateSupérieureOuÉgale(control: AbstractControl): { [key: string]: boolean } | null {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        return { 'dateInvalide': true };
      }
      return null;
    }
  
    public addSession(): void {
      console.log(this.validationForm.value);
      this.SessionService.postSession(this.validationForm.value).subscribe(res => {
        console.log(res)
        this.router.navigateByUrl('/Session/get');
        this.refreshPage();
      });
    }
  
    refreshPage(): void {
      this.router.navigateByUrl('/Session/get', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/Session/get']);
      });
    }

  
}
