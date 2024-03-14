import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { sessionservice } from 'app/Services/gestionSessionServices/SessionService';

@Component({
  selector: 'app-modfier-session',
  templateUrl: './modfier-session.component.html',
  styleUrls: ['./modfier-session.component.scss']
})
export class ModfierSessionComponent implements OnInit {
  validationForm!: FormGroup;
  idSession: any = this.activatedRoute.snapshot.params['idSession']

  constructor(private SessionService:sessionservice,
    private fb:FormBuilder,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.validationForm = this.fb.group({
      nomSession: ["",Validators.required],
      description: ["",Validators.required],
      dateEtHeureDebut:["",Validators.required],
      dateEtHeureFin: ["",Validators.required],
      type: ["",Validators.required],
      statut:["",Validators.required]
    });

  }
  updateSession(){
    this.SessionService.updateSession(this.idSession,this.validationForm.value).subscribe(res =>{
      console.log(res)
    })
  }


}
