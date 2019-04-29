import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMagListComponent } from './product-mag-list.component';

describe('ProductMagListComponent', () => {
  let component: ProductMagListComponent;
  let fixture: ComponentFixture<ProductMagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
