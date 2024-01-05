import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../services/product-service.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{

  public productId!:number;

  public productFormGroup!:FormGroup;
  constructor(private route:ActivatedRoute,
              private ps:ProductServiceService,
              private router:Router,
              private fb:FormBuilder) {

  }
  ngOnInit() {
    this.productId=this.route.snapshot.params['id'];
    this.ps.getProductById(this.productId).subscribe({
      next:(product)=>{
        this.productFormGroup=this.fb.group({
          id:this.fb.control(product.id),
          nom:this.fb.control(product.nom),
          price:this.fb.control(product.price),
          quantity:this.fb.control(product.quantity),
          imageUrl:this.fb.control(product.imageUrl)
        })

      },
      error:error =>{
        console.log(error);
      }
    });

  }

  updateProduct() {
    let product:Product=this.productFormGroup.value;

    console.log(this.productFormGroup.value)


    this.ps.updateProduct(product).subscribe({
      next:data=>{
        this.router.navigateByUrl("admin/products")
      }
    });

  }
}
