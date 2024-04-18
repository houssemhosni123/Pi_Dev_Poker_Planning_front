import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from 'app/Services/question.service';
import { error } from 'console';

@Component({
  selector: 'app-ajout-component',
  templateUrl: './ajout-component.component.html',
  styleUrls: ['./ajout-component.component.scss']
})
export class AjoutComponentComponent implements OnInit {
  selectedOption:any;
  questionForm:FormGroup;

  constructor(private fb: FormBuilder,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      text: [''],
      response: ['']
    });
  }


   
   addquestion() {
    console.log(this.questionForm.value)
    if(this.questionForm.valid)
    {
      this.questionService.addQuestion(this.questionForm.value).subscribe(()=>{
        console.log("question addedd")

      },error=>{
        console.log(error);
      })
    }
    
   }
 
   /**
    * Deletequestion
    *
    * @param id
    */
   deletequestion() {
    

    }

}
