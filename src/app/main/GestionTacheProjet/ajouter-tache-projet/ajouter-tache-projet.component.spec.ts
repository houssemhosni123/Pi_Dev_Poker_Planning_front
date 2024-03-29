import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTacheProjetComponent } from './ajouter-tache-projet.component';

describe('AjouterTacheProjetComponent', () => {
  let component: AjouterTacheProjetComponent;
  let fixture: ComponentFixture<AjouterTacheProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTacheProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTacheProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
