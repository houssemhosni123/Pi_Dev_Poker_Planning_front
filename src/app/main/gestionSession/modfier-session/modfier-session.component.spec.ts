import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierSessionComponent } from './modfier-session.component';

describe('ModfierSessionComponent', () => {
  let component: ModfierSessionComponent;
  let fixture: ComponentFixture<ModfierSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
