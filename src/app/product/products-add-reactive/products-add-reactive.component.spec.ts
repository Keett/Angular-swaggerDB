import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddReactiveComponent } from './products-add-reactive.component';

describe('ProductsAddReactiveComponent', () => {
  let component: ProductsAddReactiveComponent;
  let fixture: ComponentFixture<ProductsAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
