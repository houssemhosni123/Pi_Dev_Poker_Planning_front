import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTacheProjetComponent } from './modifier-tache-projet.component';

describe('ModifierTacheProjetComponent', () => {
  let component: ModifierTacheProjetComponent;
  let fixture: ComponentFixture<ModifierTacheProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTacheProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTacheProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
