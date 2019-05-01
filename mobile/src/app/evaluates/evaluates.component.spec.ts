import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatesComponent } from './evaluates.component';

describe('EvaluatesComponent', () => {
  let component: EvaluatesComponent;
  let fixture: ComponentFixture<EvaluatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
