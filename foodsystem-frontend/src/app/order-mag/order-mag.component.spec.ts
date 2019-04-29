import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMagComponent } from './order-mag.component';

describe('OrderMagComponent', () => {
  let component: OrderMagComponent;
  let fixture: ComponentFixture<OrderMagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
