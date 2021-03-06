import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductComponent } from './product/product.component';
import { ProductsAddKlasikComponent } from './product/products-add-klasik/products-add-klasik.component';
import { ProductsAddReactiveComponent } from './product/products-add-reactive/products-add-reactive.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products-add-klasik', component: ProductsAddKlasikComponent, canActivate: [LoginGuard]},   //canActive guarddan dönen değer true ise path'e gider
  { path: 'products-add-reactive', component: ProductsAddReactiveComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }, //Anasayfa - index sayfası / pathMatch:full ise kesşnlikle hiçbirşeyin yazılmadığı boş olduğu zaman redirectTo da ki path çalışacak demektir.
  { path: 'products/category/:categoryId', component: ProductComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
