import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {Observable} from "rxjs";
import {UserDto} from "../model/UserDto";
import {Product} from "../model/Product";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuthenticated:boolean=false;
  roles:any;
  username:any;
  accessToken!:any;
  UserId!:any;

  private host:String="http://localhost:8081"


  constructor(private http:HttpClient ) { }

  public login(username:string,password:string):Observable<any>{
    let options={
      headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params=new HttpParams().set("username",username).set("password",password)
    return this.http.post("http://localhost:8081/auth/login",params,options)
  }



  public inscription(UserDto: UserDto ):Observable<UserDto>{
    return   this.http.post<UserDto>("http://localhost:8081/Inscription",UserDto);
  }

  public getId(username:string):void{
    //return this.http.get(`${this.host}/getCustomerByNom/${username}`)
    this.http.get("http://localhost:8081/getCustomerByNom/"+username).subscribe({
      next:(data)=>{

        this.UserId=data;

      },
      error:(err)=>{

      }
    })
  }

  loadProfil(data: any) {
    this.isAuthenticated=true;
    this.accessToken = data['access-Token'];
    let jwtDecoder:any=jwtDecode(this.accessToken);
    this.username=jwtDecoder.sub;
    this.roles=jwtDecoder.scope;
    this.getId(this.username);
    console.log("show id "+this.UserId);


  }

  logout() {
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;


  }
}
