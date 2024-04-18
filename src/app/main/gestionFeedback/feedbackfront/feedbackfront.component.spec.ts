import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackfrontComponent } from './feedbackfront.component';

describe('FeedbackfrontComponent', () => {
  let component: FeedbackfrontComponent;
  let fixture: ComponentFixture<FeedbackfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
