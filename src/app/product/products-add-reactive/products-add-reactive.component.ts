import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-products-add-reactive',
  templateUrl: './products-add-reactive.component.html',
  styleUrls: ['./products-add-reactive.component.css']
})
export class ProductsAddReactiveComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder) {
  }
  productAddForm!: FormGroup;
  product: Product = new Product();

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
  }

  productAdd() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
  }

}
