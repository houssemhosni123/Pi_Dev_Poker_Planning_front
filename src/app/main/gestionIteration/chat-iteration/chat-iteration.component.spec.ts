import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIterationComponent } from './chat-iteration.component';

describe('ChatIterationComponent', () => {
  let component: ChatIterationComponent;
  let fixture: ComponentFixture<ChatIterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatIterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
