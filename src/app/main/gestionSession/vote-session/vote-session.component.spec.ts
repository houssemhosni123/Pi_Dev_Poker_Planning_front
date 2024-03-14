import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSessionComponent } from './vote-session.component';

describe('VoteSessionComponent', () => {
  let component: VoteSessionComponent;
  let fixture: ComponentFixture<VoteSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
