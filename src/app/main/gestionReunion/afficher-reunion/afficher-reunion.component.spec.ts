import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReunionComponent } from './afficher-reunion.component';

describe('AfficherReunionComponent', () => {
  let component: AfficherReunionComponent;
  let fixture: ComponentFixture<AfficherReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
