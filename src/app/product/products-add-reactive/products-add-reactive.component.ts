import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/Category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-add-reactive',
  templateUrl: './products-add-reactive.component.html',
  styleUrls: ['./products-add-reactive.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductsAddReactiveComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) {
  }
  productAddForm!: FormGroup;
  product: Product = new Product();
  categories: Category[] = [];

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  get productAddFormControl(){
    return this.productAddForm.controls;
  }
  
  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

  productAdd() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name)
    });
  }

}
