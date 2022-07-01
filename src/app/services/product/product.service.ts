import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private readonly BASE_URL = 'https://62bd594ebac21839b6010d22.mockapi.io/products'

  constructor(private http: HttpClient) { }

  getProducts(searchString?: string, category?: string):Observable<Product[]> {
    let url = this.BASE_URL + '?';
    if (searchString) {
      url += 'name=' + searchString;
    }
    if(category){
      url += '&catergory=' + category;
    }
    return this.http.get<Product[]>(url);
  }

  getProductById(id: string) :Observable<Product>{
   const url = this.BASE_URL + '/' + id;
   return this.http.get<Product>(url);
  }
}
