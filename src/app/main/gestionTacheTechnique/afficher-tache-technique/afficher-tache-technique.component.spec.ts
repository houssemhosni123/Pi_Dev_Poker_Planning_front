import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTacheTechniqueComponent } from './afficher-tache-technique.component';

describe('AfficherTacheTechniqueComponent', () => {
  let component: AfficherTacheTechniqueComponent;
  let fixture: ComponentFixture<AfficherTacheTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTacheTechniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherTacheTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
