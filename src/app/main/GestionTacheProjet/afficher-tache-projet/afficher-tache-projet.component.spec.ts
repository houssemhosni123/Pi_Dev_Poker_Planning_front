import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTacheProjetComponent } from './afficher-tache-projet.component';

describe('AfficherTacheProjetComponent', () => {
  let component: AfficherTacheProjetComponent;
  let fixture: ComponentFixture<AfficherTacheProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTacheProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherTacheProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
