import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/Category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-add-klasik',
  templateUrl: './products-add-klasik.component.html',
  styleUrls: ['./products-add-klasik.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductsAddKlasikComponent implements OnInit {

  constructor(private categoryService: CategoryService, private productService: ProductService, private alertifyService: AlertifyService) { }
  modelProduct: Product = new Product();
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data
    });
  }

  productAdd(form: NgForm){
    this.productService.addProduct(this.modelProduct).subscribe(data => {
      this.alertifyService.success(data.name)
    });
  }

}
