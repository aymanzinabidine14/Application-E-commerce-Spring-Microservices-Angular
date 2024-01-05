import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {Observable} from "rxjs";
import {OrderItem} from "../model/OrderItem";
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private host:String="http://localhost:9999"
  constructor(private http:HttpClient,private authServiceService:AuthServiceService) { }

  Order(OrderItem: OrderItem[] ):Observable<OrderItem[]>{
    return  this.http.post<OrderItem[]>(`${this.host}/order-service/Order/${this.authServiceService.UserId}`,OrderItem);
  }
}
