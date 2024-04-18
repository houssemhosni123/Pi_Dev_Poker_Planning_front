import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'app/Services/question.service';
import { SurveyService } from 'app/Services/survey.service';
import { error } from 'console';
import { TwilioService } from 'app/Services/TwilioService'

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.scss']
})
export class AddSurveyComponent implements OnInit {
  questions:any;
  formData: any = {};
  idFeedback:any;
  

  constructor(private questionService:QuestionService,private surveyService :SurveyService,private _router:Router,private router:ActivatedRoute, private twilioService: TwilioService) { 
   
  }

  ngOnInit(): void {
    this.loadQuestions();
    this.idFeedback=this.router.snapshot.params['id'];
    console.log(this.idFeedback) 
  }


  onSubmit(form: NgForm) {
  // Your existing code to collect selected options
  const selectedOptions = [];

  this.questions.forEach(question => {
    let optionSelected;
    if (this.formData[`question-${question.idQuestion}.optionA`]) {
      optionSelected = 'TresBien';
    } else if (this.formData[`question-${question.idQuestion}.optionB`]) {
      optionSelected = 'Bien';
    } else if (this.formData[`question-${question.idQuestion}.optionC`]) {
      optionSelected = 'Mauvais';
    } else if (this.formData[`question-${question.idQuestion}.optionD`]) {
      optionSelected = 'TropMauvais';
    }

    if (optionSelected) {
      selectedOptions.push({ questionId: question.idQuestion, optionSelected: optionSelected });
    }
  });

  

  



    
    console.log('Selected options:', selectedOptions);
    
    this.surveyService.insertSurvey(selectedOptions,this.idFeedback).subscribe((res: any) => {
      console.log(res);
    }, error => {
      console.log(error);
    });
   
  }
  
  loadQuestions(){
    this.questionService.getAllQuestions().subscribe((res:any)=>{
      this.questions=res;
      console.log(res)
    },error =>{
      console.log(error)
    })
    
  }
  resetForm(){
    this.formData={}

  }
  
  

}
