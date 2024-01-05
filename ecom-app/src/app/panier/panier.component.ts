import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {OrderServiceService} from "../services/order-service.service";
import {OrderItem} from "../model/OrderItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit{

  Panier:any;
  Totale!:number;

  constructor(private appStateService:AppStateService,private os:OrderServiceService,private router:Router) {
  }

  ngOnInit(): void {
    this.Panier=this.appStateService.productsState.products;
    this.Totale=this.appStateService.Totale(this.appStateService.productsState.products);
  }

  commande() {
    const orderItems: OrderItem[] = this.appStateService.extractOrderItems(this.Panier);
    console.log(orderItems);
    this.os.Order(orderItems).subscribe({
      next:data => {
        this.appStateService.clearPanier();
        this.Totale = 0;
        this.router.navigateByUrl(`/user/product-customer`)
      },error:err => {
        console.log(err);
      }
    });
  }

   async deletefrompanier(id:number) {
    console.log(this.appStateService.productsState.products)
    this.appStateService.removeProduct(id,this.appStateService.productsState.products);
    console.log(this.appStateService.productsState.products)
     this.Totale=this.appStateService.Totale(this.appStateService.productsState.products);

   }

   async incrementeQuantity(id:number) {
    this.appStateService.Increment(id,this.appStateService.productsState.products);
     this.Totale=this.appStateService.Totale(this.appStateService.productsState.products);

   }

  decrementeQuantity(id:number) {
     this.appStateService.Decrement(id,this.appStateService.productsState.products);
    this.Totale=this.appStateService.Totale(this.appStateService.productsState.products);


  }
}
