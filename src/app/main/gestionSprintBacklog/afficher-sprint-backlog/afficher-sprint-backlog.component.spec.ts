import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintBacklogListComponent } from './afficher-sprint-backlog.component';


describe('AfficherSprintBacklogComponent', () => {
  let component: SprintBacklogListComponent;
  let fixture: ComponentFixture<SprintBacklogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintBacklogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintBacklogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
