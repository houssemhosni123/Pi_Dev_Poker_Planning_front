import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierReclamationComponent } from './modfier-reclamation.component';

describe('ModfierReclamationComponent', () => {
  let component: ModfierReclamationComponent;
  let fixture: ComponentFixture<ModfierReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
