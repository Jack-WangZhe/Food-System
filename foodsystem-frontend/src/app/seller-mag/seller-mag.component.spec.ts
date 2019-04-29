import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMagComponent } from './seller-mag.component';

describe('SellerMagComponent', () => {
  let component: SellerMagComponent;
  let fixture: ComponentFixture<SellerMagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerMagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerMagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
