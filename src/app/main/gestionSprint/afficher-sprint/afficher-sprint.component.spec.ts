import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSprintComponent } from './afficher-sprint.component';

describe('AfficherSprintComponent', () => {
  let component: AfficherSprintComponent;
  let fixture: ComponentFixture<AfficherSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
