import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [];

  ngOnInit(): void { 
    //class OnInit interface'ini implement etmiştir. Component ilk yüklendiği zaman, ilk kez açıldığı zaman çalışır.
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    });
  }

  addToCard(p: Product) {
    this.alertifyService.success(p.name + "Sepete Eklendi.");
  }

}
 
