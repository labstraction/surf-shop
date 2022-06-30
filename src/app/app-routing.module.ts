import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', redirectTo: '/products' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
