import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getproducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  addproducts(data: any) {
    return this.http.post<any>("https://dummyjson.com/products/add",data)
  }

  deleteproduct(data: any) {
    console.log(`https://fakestoreapi.com/products/${data}`)
    return this.http.delete<any>(`https://fakestoreapi.com/products/${data}`)
  }
}
