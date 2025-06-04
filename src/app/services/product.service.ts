import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'https://dummyjson.com/products';
  private categoriesUrl = 'https://dummyjson.com/products/categories';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.productsUrl);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
