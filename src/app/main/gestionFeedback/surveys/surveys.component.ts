import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Survey } from 'app/ModelGestionFeedback/Survey';
import { SurveyService } from 'app/Services/survey.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  surveys: Survey[];
  public data: any;
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
  private _unsubscribeAll: Subject<any>;
  public rows;
  public tempFilterData;
  public previousStatusFilter = '';

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    this.surveyService.getAllSurveys().subscribe((res: Survey[]) => {
      this.rows = res;
      this.surveys = res;
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  deleteSurvey(row: Survey) {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(row.idsurvey).subscribe(() => {
        this.surveys = this.surveys.filter((survey: Survey) => survey.idsurvey !== row.idsurvey);
        console.log("Survey deleted successfully");
      }, error => {
        console.error("Error deleting survey:", error);
      });
    }
  }

  filterUpdate() {
    if (this.searchValue) {
      const searchId = Number(this.searchValue);
      this.rows = this.surveys.filter((s: any) => s.idsurvey === searchId);
      console.log(this.rows)
    } else {
      this.rows = [...this.surveys];
    }
  }

  toggleSurvey(row: any) {
    row.showSurvey = !row.showSurvey;
  }

  filterByStatus($event) {
    // Implement status filter logic here
  }
  

  


}
