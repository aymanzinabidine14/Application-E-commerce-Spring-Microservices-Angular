import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../services/product-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
public productForm!:FormGroup;

  constructor(private fb:FormBuilder,private productServiceService :ProductServiceService,private router:Router) {}
  ngOnInit(): void {
    this.productForm=this.fb.group({
      nom:this.fb.control('',[Validators.required]),
      price:this.fb.control(0,[Validators.required]),
      quantity:this.fb.control(0,[Validators.required]),
      imageUrl:this.fb.control('',[Validators.required])
    });
  }


  saveProduct() {
    let product=this.productForm.value;
    //onsole.log(this.productForm.value)
    this.productServiceService.saveProduct(product).subscribe({
      next:data => {
        this.router.navigateByUrl("admin/products")
      //  alert(JSON.stringify(data));
      },error:err => {
        console.log(err);
      }
    });
  }

}
