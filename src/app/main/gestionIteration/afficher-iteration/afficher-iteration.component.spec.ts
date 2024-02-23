import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherIterationComponent } from './afficher-iteration.component';

describe('AfficherIterationComponent', () => {
  let component: AfficherIterationComponent;
  let fixture: ComponentFixture<AfficherIterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherIterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
