import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private host:String="http://localhost:9999"

  constructor(private http:HttpClient) { }

  public searchProduct(){
    return this.http.get(`${this.host}/inventory-service/AllTheProducts?projection=fullProduct`,{observe:'response'});
  }
  public deleteProduct(product:Product){
    return   this.http.delete<any>(`${this.host}/inventory-service/DeleteProduct/${product.id}`);
  }

  saveProduct(product: Product ):Observable<Product>{
    return   this.http.post<Product>(`${this.host}/inventory-service/saveProduct`,product);
  }

  getProductById(productId: number):Observable<Product> {
    return this.http.get<Product>(`${this.host}/inventory-service/getProduct/${productId}`);
  }

  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(`${this.host}/inventory-service/UpdateProduct/${product.id}`,product);
  }
}
