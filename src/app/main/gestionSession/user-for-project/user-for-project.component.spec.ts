import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForProjectComponent } from './user-for-project.component';

describe('UserForProjectComponent', () => {
  let component: UserForProjectComponent;
  let fixture: ComponentFixture<UserForProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
