import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatByUserComponent } from './stat-by-user.component';

describe('StatByUserComponent', () => {
  let component: StatByUserComponent;
  let fixture: ComponentFixture<StatByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
