import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsAddKlasikComponent } from './product/products-add-klasik/products-add-klasik.component';
import { ProductsAddReactiveComponent } from './product/products-add-reactive/products-add-reactive.component';

const routes: Routes = [
  {path:'products', component:ProductComponent},
  {path:'products-add-klasik', component:ProductsAddKlasikComponent},
  {path:'products-add-reactive', component:ProductsAddReactiveComponent},
  {path:'', redirectTo: 'products', pathMatch:'full'},
  {path:'products/category/:categoryId', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
