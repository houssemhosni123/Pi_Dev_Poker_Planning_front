import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from 'app/Services/feedback.service';

@Component({
  selector: 'app-feedbackfront',
  templateUrl: './feedbackfront.component.html',
  styleUrls: ['./feedbackfront.component.scss']
})
export class FeedbackfrontComponent implements OnInit {
  selectedRating: number = 0;
  currentDate: Date = new Date();
  description: string = '';
  anonymeChecked: boolean = false;
  surveyId: any;

  constructor(private feedBackService: FeedbackService, private _router: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.surveyId = this.router.snapshot.params['id'];
  }

  onRatingClicked(rating: number): void {
    this.selectedRating = rating;
    console.log('Rated:', rating);
  }

  submit(form: NgForm) {
  
    const requestBody = {
      evaluation: this.selectedRating,
      description: this.description,
      anonyme: this.anonymeChecked
    };
    this.feedBackService.createFeedBack(requestBody).subscribe((res:any) => {
      console.log(res)
      console.log("inserted");
      this.clear();
      if (res.idfeedback) {
        this._router.navigate(['Feedback/addSurvey', res.idfeedback]);
      } else {
        console.error('Response does not contain ID:', res);
      }
    }, error => {
      console.log(error);
    });
  }

  clear() {
    
    this.anonymeChecked = false;
    this.description = '';
  }
}
