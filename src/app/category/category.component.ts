import { Component, OnInit } from '@angular/core';
import { Category } from './Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  categories: Category[] = [
    {id:1, name: "Elektronik"},
    {id:2, name: "Müzik"},
    {id:3, name: "Resim"},
    {id:4, name: "İletişim"}
  ]

  title= "Kategori Listesi";

  ngOnInit(): void {
  }

}
