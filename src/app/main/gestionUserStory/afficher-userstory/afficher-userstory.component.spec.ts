import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUserstoryComponent } from './afficher-userstory.component';

describe('AfficherUserstoryComponent', () => {
  let component: AfficherUserstoryComponent;
  let fixture: ComponentFixture<AfficherUserstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherUserstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
