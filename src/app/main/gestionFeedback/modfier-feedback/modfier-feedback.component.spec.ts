import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierFeedbackComponent } from './modfier-feedback.component';

describe('ModfierFeedbackComponent', () => {
  let component: ModfierFeedbackComponent;
  let fixture: ComponentFixture<ModfierFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
