import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CostumersComponent} from "./costumers/costumers.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {CustomerProductsComponent} from "./customer-products/customer-products.component";
import {PanierComponent} from "./panier/panier.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {UserTemplateComponent} from "./user-template/user-template.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",redirectTo:"/login",pathMatch:"full"
  },
  {
    path:"inscription",component:InscriptionComponent
  },
  {
    path:"admin",component:AdminTemplateComponent,canActivate:[authenticationGuard],
    children :[
      {path :"costumers",component:CostumersComponent,canActivate:[authorizationGuard],data:{role:"ADMIN"}},
      {path :"new-product",component:NewProductComponent,canActivate:[authorizationGuard],data:{role:"ADMIN"}},
      {path :"edit-product/:id",component:EditProductComponent,canActivate:[authorizationGuard],data:{role:"ADMIN"}},
      {path :"products",component:ProductsComponent,canActivate:[authorizationGuard],data:{role:"ADMIN"}},
      {path :"orders/:customerId",component:OrdersComponent},
      {path :"order-details/:orderId",component:OrderDetailsComponent},
      {path:"notAuthorized",component:NotAuthorizedComponent}
    ]
  },
  {
    path:"user",component:UserTemplateComponent,canActivate:[authenticationGuard],
    children :[

      {path :"product-customer",component:CustomerProductsComponent},
      {path:"panier",component:PanierComponent},
      {path :"orders/:customerId",component:OrdersComponent},
      {path :"order-details/:orderId",component:OrderDetailsComponent},


    ]
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
