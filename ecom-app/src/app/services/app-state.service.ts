import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {OrderItem} from "../model/OrderItem";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public productsState:any={
    products:[]
  }

  constructor() { }

  public setProductState(state:any):void{
    this.productsState={...this.productsState,...state}
  }

  public addProduct(product: Product): void {
    this.productsState.products.push(product);
  }
  public extractOrderItems(products: Product[]): OrderItem[] {
    return products.map(product => ({
      id: product.id,
      orderQuantity: product.OrderQuantity
    }));
  }

  public removeProduct(productId: number,Products: Product[]): void {
    const index = Products.findIndex((product: any) => product.id === productId);
    if (index !== -1) {
      Products.splice(index, 1);
      console.error(`Le produit avec l'ID ${productId} est supprimer.`);
    } else {
      console.error(`Le produit avec l'ID ${productId} n'a pas été trouvé.`);
    }
  }

  public Increment(productId: number,Products: Product[]):void{
    const product = Products.find((p: any) => p.id === productId);
    if (product) {
      product.OrderQuantity += 1;

      console.log(product.OrderQuantity)
    } else {
      console.error(`Le produit avec l'ID ${productId} n'a pas été trouvé.`);
    }
  }

  public Decrement(productId: number, Products: Product[]) {
    const product: Product | undefined = Products.find((p: Product) => p.id === productId);

    if (!product) {
      throw new Error(`Le produit avec l'ID ${productId} n'a pas été trouvé.`);
    }

    if (product.OrderQuantity > 1) {
      product.OrderQuantity -= 1;
    }
  }

  public Totale(Products: Product[]): number {
    let totale: number = 0;
    for (const p of Products) {
      totale += p.OrderQuantity * p.price;
    }
    return totale;
  }

  public clearPanier(){
    this.productsState.products=[];
  }


}
