import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSprintBacklogComponent } from './afficher-sprint-backlog.component';

describe('AfficherSprintBacklogComponent', () => {
  let component: AfficherSprintBacklogComponent;
  let fixture: ComponentFixture<AfficherSprintBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherSprintBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherSprintBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
