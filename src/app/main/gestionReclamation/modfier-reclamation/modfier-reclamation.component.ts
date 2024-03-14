import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'app/Services/gestionReclamationServices/ReclamationServices';

@Component({
  selector: 'app-modfier-reclamation',
  templateUrl: './modfier-reclamation.component.html',
  styleUrls: ['./modfier-reclamation.component.scss']
})
export class ModfierReclamationComponent implements OnInit {
  updateForm: FormGroup;
  Idrecl: number;
  reclamationDetails: any;
  reclamationUpdatedSuccessfully: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.Idrecl = +this.route.snapshot.paramMap.get('id');
      this.initForm();
    
      this.reclamationService.getReclamationById(this.Idrecl).subscribe(
        (reunionDetails) => {
          this.reclamationDetails= this.reclamationDetails;
          this.updateForm.patchValue({
            titre_Reclamation: this.reclamationDetails.titre_Reclamation,
            contenu_Reclamation : this.reclamationDetails.contenu_Reclamation ,
            titre_Reunion : this.reclamationDetails.titre_Reunion ,
            idReunion : this.reclamationDetails.idReunion,
            date_soumission :this.reclamationDetails.date_soumission,
            
          });
        },
        (error) => {
          console.error('Erreur lors du chargement des détails du sprint :', error);
        }
      );
  }
  initForm() {
    this.updateForm = this.formBuilder.group({
      titre_Reclamation: ['', Validators.required],
      contenu_Reclamation: ['', Validators.required],
      titre_Reunion: ['', Validators.required],
      idReunion: ['', Validators.required],
      date_soumission:['', Validators.required],
    });
  }
  onSubmit() {if (this.updateForm.valid) {
    const updateReclamation = {
      idReclamation: this.Idrecl,
      titre_Reclamation :this.updateForm.value.titre_Reclamation ,
      contenu_Reclamation: this.updateForm.value. contenu_Reclamation,
      titre_Reunion: this.updateForm.value.titre_Reunion,
      idReunion:this.updateForm.value.idReunion,
      date_soumission:this.updateForm.value.date_soumission
      
    };
    console.log('Données à envoyer pour la mise à jour :', updateReclamation); // Ajoutez ce log


    this.reclamationService.updateReclamation(updateReclamation.idReclamation, updateReclamation).subscribe(
      () => {
        console.log('Reclamation mis à jour avec succès !');
        
        this.reclamationUpdatedSuccessfully = true;
        setTimeout(() => {
          this.reclamationUpdatedSuccessfully = false;
          this.router.navigate(['AfficherReclamation']);
        }, 500);

        // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du Reclamation :', error);
      }
    );
  }
}
}
