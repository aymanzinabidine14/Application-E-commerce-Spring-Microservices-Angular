import { Component } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authServiceService:AuthServiceService,private router:Router) {
  }
  handleLogout() {
    this.authServiceService.logout();
    this.router.navigateByUrl("/login");
  }
}
