import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable() // Bu kullanım global bir servis olmadığını gösterir.
export class ProductService {

  constructor(private http:HttpClient) { }

  pathProducts = "http://localhost:3000/products";

  getProducts(categoryId: number): Observable<Product[]> {
    let path = this.pathProducts;
    if(categoryId){     //  categoryId gönderilirse;
      path += "?categoryId=" + categoryId
    }
    return this.http.get<Product[]>(path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product) : Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.pathProducts, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir hata oluştu" + err.error.message;
    }else{
      errorMessage = "Sistemsel bir hata oluştu";
    }
    return throwError(errorMessage);
  }
}
