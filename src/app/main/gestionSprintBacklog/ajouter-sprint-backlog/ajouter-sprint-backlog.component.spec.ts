import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSprintBacklogComponent } from './ajouter-sprint-backlog.component';

describe('AjouterSprintBacklogComponent', () => {
  let component: AjoutSprintBacklogComponent;
  let fixture: ComponentFixture<AjoutSprintBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSprintBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutSprintBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
