import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationShowComponent } from './estimation-show.component';

describe('EstimationShowComponent', () => {
  let component: EstimationShowComponent;
  let fixture: ComponentFixture<EstimationShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
