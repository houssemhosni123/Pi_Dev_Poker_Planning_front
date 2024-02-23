import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierReunionComponent } from './modfier-reunion.component';

describe('ModfierReunionComponent', () => {
  let component: ModfierReunionComponent;
  let fixture: ComponentFixture<ModfierReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
