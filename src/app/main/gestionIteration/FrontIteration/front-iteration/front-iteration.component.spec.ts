import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontIterationComponent } from './front-iteration.component';

describe('FrontIterationComponent', () => {
  let component: FrontIterationComponent;
  let fixture: ComponentFixture<FrontIterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontIterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
