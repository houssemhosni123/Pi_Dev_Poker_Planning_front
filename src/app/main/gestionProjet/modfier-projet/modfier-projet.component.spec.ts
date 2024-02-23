import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierProjetComponent } from './modfier-projet.component';

describe('ModfierProjetComponent', () => {
  let component: ModfierProjetComponent;
  let fixture: ComponentFixture<ModfierProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
