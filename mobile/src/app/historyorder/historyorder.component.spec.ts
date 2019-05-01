import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryorderComponent } from './historyorder.component';

describe('HistoryorderComponent', () => {
  let component: HistoryorderComponent;
  let fixture: ComponentFixture<HistoryorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
