import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityDataChartComponent } from './velocity-data-chart.component';

describe('VelocityDataChartComponent', () => {
  let component: VelocityDataChartComponent;
  let fixture: ComponentFixture<VelocityDataChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelocityDataChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocityDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
