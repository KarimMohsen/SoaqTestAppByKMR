import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { ManageOrdersComponent } from './orders/manage-orders/manage-orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/adminOrders', component: AdminOrdersComponent },
  { path: 'admin/adminProducts', component: AdminProductsComponent },
  { path: 'manageOrders', component: ManageOrdersComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
