import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierSprintComponent } from './modfier-sprint.component';

describe('ModfierSprintComponent', () => {
  let component: ModfierSprintComponent;
  let fixture: ComponentFixture<ModfierSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
