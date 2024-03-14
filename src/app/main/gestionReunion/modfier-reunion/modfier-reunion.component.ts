import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import { FlatpickrOptions } from 'ng2-flatpickr';

@Component({
  selector: 'app-modfier-reunion',
  templateUrl: './modfier-reunion.component.html',
  styleUrls: ['./modfier-reunion.component.scss']
})
export class ModfierReunionComponent implements OnInit {
  updateForm: FormGroup;
  Idreun: number;
  reunionDetails: any;
  reunionUpdatedSuccessfully: boolean = false;
 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private reunionService: ReunionService) { }

    ngOnInit() {
      this.Idreun = +this.route.snapshot.paramMap.get('id');
      this.initForm();
    
      this.reunionService.getReunionById(this.Idreun).subscribe(
        (reunionDetails) => {
          this.reunionDetails = reunionDetails;
          this.updateForm.patchValue({
            titre_Reunion: this.reunionDetails.titre_Reunion,
            DateDebut_Reunion: this.reunionDetails.DateDebut_Reunion,
            DateFin_Reunion: this.reunionDetails.DateFin_Reunion,
            lieu_Reunion: this.reunionDetails.lieu_Reunion,
            priorite_Reunion: this.reunionDetails.priorite_Reunion,
          });
        },
        (error) => {
          console.error('Erreur lors du chargement des détails du sprint :', error);
        }
      );
    }
    
  initForm() {
    this.updateForm = this.formBuilder.group({
      titre_Reunion: ['', Validators.required],
      DateDebut_Reunion: ['', Validators.required],
      DateFin_Reunion: ['', Validators.required],
      lieu_Reunion: ['', Validators.required],
      priorite_Reunion: ['', Validators.required],
    });
  }
  onSubmit() {if (this.updateForm.valid) {
    const updateReunion = {
      idReunion: this.Idreun,
      titre_Reunion:this.updateForm.value.titre_Reunion,
      DateDebut_Reunion: this.updateForm.value.DateDebut_Reunion,
      DateFin_Reunion: this.updateForm.value.DateFin_Reunion,
      lieu_Reunion: this.updateForm.value.lieu_Reunion,
      priorite_Reunion: this.updateForm.value.priorite_Reunion,
    };
    console.log('Données à envoyer pour la mise à jour :', updateReunion); // Ajoutez ce log


    this.reunionService.updateReunion(updateReunion.idReunion, updateReunion).subscribe(
      () => {
        console.log('Sprint mis à jour avec succès !');
        
        this.reunionUpdatedSuccessfully = true;
        setTimeout(() => {
          this.reunionUpdatedSuccessfully = false;
          this.router.navigate(['AfficherReunion']);
        }, 500);

        // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du sprint :', error);
      }
    );
  }
}}


