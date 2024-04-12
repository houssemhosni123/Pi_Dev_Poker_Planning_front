import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iteration } from 'app/Model/iteration';
import { IterationService } from 'app/Services/gestionIterationServices/IterationServices';

@Component({
  selector: 'app-modfier-iteration',
  templateUrl: './modfier-iteration.component.html',
  styleUrls: ['./modfier-iteration.component.scss']
})
export class ModfierIterationComponent implements OnInit {
  iterationForm: FormGroup;
  iteration:Iteration;
  constructor(
    private iterationService: IterationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  dateComparisonValidator(
    controlName1: string,
    controlName2: string
  ): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control1 = formGroup.get(controlName1);
      const control2 = formGroup.get(controlName2);
  
      if (control1.value && control2.value && new Date(control1.value) > new Date(control2.value)) {
        return { dateComparison: true };
      }
  
      return null;
    };
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  ngOnInit(): void {
    
    this.initializeForm();
  
    const idIteration = +this.route.snapshot.paramMap.get('id');
    this.iterationService.getIterationById(idIteration).subscribe(iteration => {
      this.iteration = iteration;
      console.log("resultat",iteration.resultat)
      console.log("datedebut",iteration.date_IterationDebut)
      this.iterationForm.patchValue({
        resultat: iteration.resultat,
        date_IterationDebut: this.formatDate(new Date(iteration.date_IterationDebut)),
        date_IterationFin: this.formatDate(new Date(iteration.date_IterationFin))
     
      });
    });
      
    
  }

  updateIteration(): void {
    if (this.iterationForm.valid && this.iteration && this.iteration.idIteration) {
      const updatedIteration: Iteration = this.iterationForm.value;
      this.iterationService.updateIteration(updatedIteration, this.iteration.idIteration)
        .subscribe(() => {
          console.log('Iteration updated successfully:', updatedIteration);
          this.router.navigate(['/Iteration/AfficherIteration']);
        }, error => {
          console.error('Error updating iteration:', error);
        });
    } else {
      // Form is not valid or iteration or id is undefined, handle accordingly
    }
  }
  
  


  private initializeForm(): void {
    this.iterationForm = this.formBuilder.group({
      resultat: ['', Validators.required],
      date_IterationDebut: ['', Validators.required],
      date_IterationFin: ['', Validators.required],
    }, { validator: this.dateComparisonValidator('date_IterationDebut', 'date_IterationFin') });
  }
  }


