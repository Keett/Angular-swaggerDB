import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService : AlertifyService) { }
  title = "Ürün Listesi";
  filterText = "";

  products: Product[] = [
    {id:1, name:"Laptop", price: 55616, categoryId: 1, description: "Monster Notebook Tulbar",imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},
    {id:2, name:"Kulaklık", price: 500, categoryId: 2, description: "Jabra Elite 25E",imageUrl: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"}
  ]

  ngOnInit(): void {
    
  }

  addToCard(p : Product){
    this.alertifyService.success(p.name);
  }

}
