import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {ProductServiceService} from "../services/product-service.service";
import {Product} from "../model/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  Products:any;
  constructor(private http:HttpClient,private productServiceService:ProductServiceService,private router:Router) {}
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


  handleDeleteProduct(product: Product) {
      this.productServiceService.deleteProduct(product).subscribe({
        next:value => {
           this.search();
          }
        }
      )

  }

  handleUpdateProduct(product: Product) {
    //this.router.navigateByUrl(`/admin/editProduct/${product.id}`)
    this.router.navigateByUrl(`admin/edit-product/${product.id}`)

  }

  handleNewProduct() {
    this.router.navigateByUrl("admin/new-product")

  }
}
