import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'registrar',
    component: RegistrarComponent
  },
  {
    path:'addProduct',
    component: AddProductsComponent
  },
  {
    path:'update/:idProduct',
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
