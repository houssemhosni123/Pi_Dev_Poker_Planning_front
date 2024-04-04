import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierUserstoryComponent } from './modfier-userstory.component';

describe('ModfierUserstoryComponent', () => {
  let component: ModfierUserstoryComponent;
  let fixture: ComponentFixture<ModfierUserstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfierUserstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfierUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
