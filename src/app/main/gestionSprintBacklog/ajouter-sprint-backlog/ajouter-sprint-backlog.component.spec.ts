import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSprintBacklogComponent } from './ajouter-sprint-backlog.component';

describe('AjouterSprintBacklogComponent', () => {
  let component: AjouterSprintBacklogComponent;
  let fixture: ComponentFixture<AjouterSprintBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSprintBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterSprintBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
