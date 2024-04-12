import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';
import { addSession } from '../model/addSession';
import { customBadWordValidator } from './customBadWordValidator';

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
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.validationForm = this.fb.group({
      nomSession: ["", [Validators.required, customBadWordValidator(['bad', 'words'])]],
      description: ["", [Validators.required, customBadWordValidator(['bad', 'words'])]],
      dateEtHeureDebut:["",Validators.required],
      dateEtHeureFin: ["",Validators.required],
      type: ["",Validators.required],
      statut:["",Validators.required]
    });
  }
  


  public addSession(){
    console.log(this.validationForm.value);

    this.SessionService.postSession(this.validationForm.value).subscribe(res =>{

      console.log(res)

    })
  }
}
