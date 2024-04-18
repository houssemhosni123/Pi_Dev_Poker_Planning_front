import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Feedback } from 'app/ModelGestionFeedback/Feedback';
import { FeedbackService } from 'app/Services/feedback.service';
import { Subject, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-feed-backs',
  templateUrl: './feed-backs.component.html',
  styleUrls: ['./feed-backs.component.scss']
})
export class FeedBacksComponent implements OnInit {
  sessionavgfeedbacks: any[] = [];
  feedbacks: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Downloaded', value: 'Downloaded' },
    { name: 'Draft', value: 'Draft' },
    { name: 'Paid', value: 'Paid' },
    { name: 'Partial Payment', value: 'Partial Payment' },
    { name: 'Past Due', value: 'Past Due' },
    { name: 'Sent', value: 'Sent' }
  ];

  public selectedStatus = [];
  public searchValue = '';

  // decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  public rows;
  public tempFilterData;
  public previousStatusFilter = '';


  constructor(private feedbackService: FeedbackService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadFeedBack();
    this.calculateAverageEvaluation();
}

  

  deleteFeedback(row: Feedback) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedbackById(row.idfeedback).subscribe(() => {
        this.feedbacks = this.feedbacks.filter((feedback: Feedback) => feedback.idfeedback !== row.idfeedback);
        console.log("Feedback deleted successfully");
      }, error => {
        console.error("Error deleting feedback:", error);
      });
    }
  }

  filterUpdate() {
    if (this.searchValue) {
      const searchId = Number(this.searchValue);
      const filteredFeedbacks = this.feedbacks.filter((f: any) => f.idfeedback === searchId);
      this.rows = filteredFeedbacks.length > 0 ? filteredFeedbacks : [];
      console.log(this.rows);
    } else {
      this.rows = [...this.feedbacks];
    }
  }
  calculateAverageEvaluation() {
    if (!this.feedbacks) {
        return;
    }

    const sessionSumMap = new Map<number, { sum: number, count: number }>();

    this.feedbacks.forEach((feedback: Feedback) => {
        const sessionData = sessionSumMap.get(feedback.sessionid) || { sum: 0, count: 0 };
        sessionData.sum += feedback.evaluation;
        sessionData.count++;
        sessionSumMap.set(feedback.sessionid, sessionData);
    });

    this.sessionavgfeedbacks = Array.from(sessionSumMap.entries()).map(([sessionid, { sum, count }]) => ({
        sessionid: sessionid,
        moyennesession: sum / count
    }));
}




  
loadFeedBack() {
  this.feedbackService.getAllFeedbacks().subscribe((res: any) => {
      this.feedbacks = res; // Assuming res is an array of feedbacks
      this.rows = this.feedbacks; // Assign directly to rows
      this.calculateAverageEvaluation();
  }, error => {
      console.log(error);
  });
}




  filterByStatus($event) {
  }

}
