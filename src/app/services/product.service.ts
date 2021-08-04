import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  pathProducts = "http://localhost:3000/products";

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.pathProducts + "?categoryId=" + categoryId).pipe(
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
