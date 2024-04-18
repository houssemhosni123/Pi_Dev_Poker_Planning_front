import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Question } from 'app/ModelGestionFeedback/Question';
import { QuestionService } from 'app/Services/question.service'; 
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: any;
  public data: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public selectStatus: any = [
    { name: 'All', value: '' },
    // Add other status options as needed
  ];

  public selectedStatus = [];
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  public rows;
  public tempFilterData;
  public previousStatusFilter = '';

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAllQuestions().subscribe(
      (res: any) => {
        this.questions = res;
        this.rows = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteQuestion(row: Question) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.questionService.deleteQuestionById(row.idQuestion).subscribe(
        () => {
          this.questions = this.questions.filter((question: Question) => question.idQuestion !== row.idQuestion);
          console.log("Question deleted successfully");
        },
        error => {
          console.error("Error deleting question:", error);
        }
      );
    }
  }

  filterUpdate() {
    if (this.searchValue) {
      const searchId = Number(this.searchValue);
      this.rows = this.questions.filter((q: any) => q.id === searchId);
      console.log(this.rows);
    } else {
      this.rows = [...this.questions];
    }
  }

  toggleSurvey(row: any) {
    row.showSurvey = !row.showSurvey;
  }

  
  }
