import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CustomerServiceService} from "../services/customer-service.service";
import {Customer} from "../model/Customer";

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrl: './costumers.component.css'
})
export class CostumersComponent implements OnInit{

  customers:any;
  constructor(private http:HttpClient,private router:Router,private cs:CustomerServiceService) {
  }
  ngOnInit() {
  this.search();
  }

  search(){
    this.cs.searchCustomers().subscribe({
      next:(resp)=>{
        this.customers=resp.body as Customer[];
      },
      error:err => {

      }})}

  getOrders(c: any) {
    this.router.navigateByUrl("admin/orders/"+c.id)



  }
}
