import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsDataChartComponent } from './us-data-chart.component';

describe('UsDataChartComponent', () => {
  let component: UsDataChartComponent;
  let fixture: ComponentFixture<UsDataChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsDataChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
