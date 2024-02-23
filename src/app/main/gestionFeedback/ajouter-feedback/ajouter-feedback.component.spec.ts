import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFeedbackComponent } from './ajouter-feedback.component';

describe('AjouterFeedbackComponent', () => {
  let component: AjouterFeedbackComponent;
  let fixture: ComponentFixture<AjouterFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
