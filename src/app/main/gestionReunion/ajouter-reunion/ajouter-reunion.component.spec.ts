import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReunionComponent } from './ajouter-reunion.component';

describe('AjouterReunionComponent', () => {
  let component: AjouterReunionComponent;
  let fixture: ComponentFixture<AjouterReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
