import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CostumersComponent } from './costumers/costumers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';
import { CustomerProductsComponent } from './customer-products/customer-products.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import {AuthServiceService} from "./services/auth-service.service";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CostumersComponent,
    OrdersComponent,
    OrderDetailsComponent,
    NewProductComponent,
    EditProductComponent,
    CustomerProductsComponent,
    PanierComponent,
    LoginComponent,
    AdminTemplateComponent,
    NavbarComponent,
    NotAuthorizedComponent,
    UserTemplateComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
  {provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
