import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketdetailComponent } from './marketdetail.component';

describe('MarketdetailComponent', () => {
  let component: MarketdetailComponent;
  let fixture: ComponentFixture<MarketdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
