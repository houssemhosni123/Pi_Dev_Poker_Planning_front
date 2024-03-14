import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteEstimationsComponent } from './vote-estimations.component';

describe('VoteEstimationsComponent', () => {
  let component: VoteEstimationsComponent;
  let fixture: ComponentFixture<VoteEstimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteEstimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteEstimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
