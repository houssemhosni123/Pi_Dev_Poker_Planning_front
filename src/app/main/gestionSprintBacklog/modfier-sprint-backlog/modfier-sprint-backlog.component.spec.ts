import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierSprintBacklogComponent } from './modfier-sprint-backlog.component';

describe('ModfierSprintBacklogComponent', () => {
  let component: ModfierSprintBacklogComponent;
  let fixture: ComponentFixture<ModfierSprintBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierSprintBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierSprintBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
