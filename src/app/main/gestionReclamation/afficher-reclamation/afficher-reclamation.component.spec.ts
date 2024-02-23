import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReclamationComponent } from './afficher-reclamation.component';

describe('AfficherReclamationComponent', () => {
  let component: AfficherReclamationComponent;
  let fixture: ComponentFixture<AfficherReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
