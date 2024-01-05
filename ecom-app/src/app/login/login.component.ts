import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  formLogin!:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthServiceService,private router:Router) {
  }
  ngOnInit() {
    this.formLogin=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
    })
  }


  handleLogin() {
    let username=this.formLogin.value.username;
    let password=this.formLogin.value.password;

    this.authService.login(username,password).subscribe({
      next:data=>{
        //console.log(data)
        this.authService.loadProfil(data);
        if(this.authService.roles.includes("ADMIN")){
          this.router.navigateByUrl("/admin/products")
        }else{
          this.router.navigateByUrl("/user/product-customer")

        }
    },
      error:err =>{
        console.log(err)
      }
    })
  }

  handleRoute() {
    console.log('Link clicked!');

    this.router.navigateByUrl("/inscription")

  }
}
