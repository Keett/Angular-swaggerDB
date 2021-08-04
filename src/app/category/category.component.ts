import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories: Category[] = [];
  title= "Kategori Listesi";

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data
    });
  }

}
