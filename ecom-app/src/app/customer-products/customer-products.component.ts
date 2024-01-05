import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductServiceService} from "../services/product-service.service";
import {Router} from "@angular/router";
import {Product} from "../model/Product";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrl: './customer-products.component.css'
})
export class CustomerProductsComponent implements OnInit{


  Products:any;
  constructor(private http:HttpClient,
              private productServiceService:ProductServiceService,
              private router:Router,
              private appStateService:AppStateService) {}
  ngOnInit() {
    this.search();
  }


  search(){
    this.productServiceService.searchProduct().subscribe({
      next:(resp)=>{
        this.Products=resp.body as Product[];
      },
      error:err => {

      }})}

  handleAddToPanier(p: Product): void {
    // Vérifier si le produit est déjà présent dans la liste
    const existingProduct = this.appStateService.productsState.products.find(
      (product: Product) => product.id === p.id
    );

    if (existingProduct) {
      // Si le produit existe déjà, incrémenter la variable quantityCommande
      existingProduct.OrderQuantity += 1;
    } else {
      // Si le produit n'existe pas, ajouter le produit avec quantityCommande initialisé à 1
      this.appStateService.addProduct({ ...p, OrderQuantity: 1 });
    }
  }
}
