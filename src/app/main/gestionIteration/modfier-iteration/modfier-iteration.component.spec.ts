import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierIterationComponent } from './modfier-iteration.component';

describe('ModfierIterationComponent', () => {
  let component: ModfierIterationComponent;
  let fixture: ComponentFixture<ModfierIterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierIterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
