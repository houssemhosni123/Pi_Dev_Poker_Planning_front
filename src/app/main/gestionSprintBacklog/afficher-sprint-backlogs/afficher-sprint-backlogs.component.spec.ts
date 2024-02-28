import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSprintBacklogsComponent } from './afficher-sprint-backlogs.component';

describe('AfficherSprintBacklogsComponent', () => {
  let component: AfficherSprintBacklogsComponent;
  let fixture: ComponentFixture<AfficherSprintBacklogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherSprintBacklogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherSprintBacklogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
