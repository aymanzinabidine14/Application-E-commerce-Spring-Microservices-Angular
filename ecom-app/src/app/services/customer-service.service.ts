import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private host:String="http://localhost:9999"
  constructor(private http:HttpClient) { }
  public searchCustomers(){
    return this.http.get(`http://localhost:8081/AllTheCustomers`,{observe:'response'});
  }
}
