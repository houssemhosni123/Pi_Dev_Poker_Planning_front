import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSprintComponent } from './ajouter-sprint.component';

describe('AjouterSprintComponent', () => {
  let component: AjouterSprintComponent;
  let fixture: ComponentFixture<AjouterSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
