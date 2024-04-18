import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartvoteComponent } from './startvote.component';

describe('StartvoteComponent', () => {
  let component: StartvoteComponent;
  let fixture: ComponentFixture<StartvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartvoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
