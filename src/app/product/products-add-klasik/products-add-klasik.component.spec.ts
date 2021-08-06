import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddKlasikComponent } from './products-add-klasik.component';

describe('ProductsAddKlasikComponent', () => {
  let component: ProductsAddKlasikComponent;
  let fixture: ComponentFixture<ProductsAddKlasikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddKlasikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAddKlasikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
