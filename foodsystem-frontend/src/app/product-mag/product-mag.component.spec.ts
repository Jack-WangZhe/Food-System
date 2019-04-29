import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMagComponent } from './product-mag.component';

describe('ProductMagComponent', () => {
  let component: ProductMagComponent;
  let fixture: ComponentFixture<ProductMagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
