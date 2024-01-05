import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{

  ordersDetails:any;
  orderId!:number;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
  }
  ngOnInit() {
    this.http.get("http://localhost:9999/order-service/fullOrder/"+this.orderId).subscribe({
      next:(data)=>{

        this.ordersDetails=data;

        console.log(data);

      },
      error:(err)=>{

      }
    })

  }


}
