import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheTechniqueAddComponent } from './ajouter-tache-technique.component';

describe('AjouterTacheTechniqueComponent', () => {
  let component: TacheTechniqueAddComponent;
  let fixture: ComponentFixture<TacheTechniqueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheTechniqueAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheTechniqueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
