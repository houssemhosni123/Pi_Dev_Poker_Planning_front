import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUserstoryComponent } from './ajouter-userstory.component';

describe('AjouterUserstoryComponent', () => {
  let component: AjouterUserstoryComponent;
  let fixture: ComponentFixture<AjouterUserstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUserstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
