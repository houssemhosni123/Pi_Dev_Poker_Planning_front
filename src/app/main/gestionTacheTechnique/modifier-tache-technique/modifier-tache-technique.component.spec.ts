import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTacheTechniqueComponent } from './modifier-tache-technique.component';

describe('ModifierTacheTechniqueComponent', () => {
  let component: ModifierTacheTechniqueComponent;
  let fixture: ComponentFixture<ModifierTacheTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTacheTechniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTacheTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
