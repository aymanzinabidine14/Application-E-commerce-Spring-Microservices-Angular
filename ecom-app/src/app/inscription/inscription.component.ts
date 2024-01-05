import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";
import {UserDto} from "../model/UserDto";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit{



  formInscription!:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthServiceService,private router:Router) {
  }
  ngOnInit() {
    this.formInscription=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
    })
  }


  handleInscription() {

    let userDto: UserDto = { username: "", password: "" }; // Initialize the userDto object

    userDto.username = this.formInscription.value.username;
    userDto.password = this.formInscription.value.password;

    this.authService.inscription(userDto).subscribe({
      next:data=>{
        this.router.navigateByUrl("/login" +
          "")

      },
      error:err =>{
        console.log(err)
      }
    })
  }


  handleRoute() {
    this.router.navigateByUrl("/login");
  }
}
