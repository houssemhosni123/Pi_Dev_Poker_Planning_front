import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterIterationComponent } from './ajouter-iteration.component';

describe('AjouterIterationComponent', () => {
  let component: AjouterIterationComponent;
  let fixture: ComponentFixture<AjouterIterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterIterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
