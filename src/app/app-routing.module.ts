import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './tutorial-router/components/products.component';
import { ProductComponent } from './tutorial-router/components/product.component';
import { NotFoundComponent } from './tutorial-router/components/not-found.component';

import { ProductEditComponent } from './tutorial-router/components/product-edit.component';
import { ProductDeleteComponent } from './tutorial-router/components/product-delete.component';

const routes: Routes = [
  { path: '',                   redirectTo: 'products', pathMatch: 'full' },
  { path: 'products',           component: ProductsComponent },
  { path: 'products/:id',       component: ProductComponent },
  { path: 'products/:id/edit',  component: ProductEditComponent },
  { path: 'products/:id/delete',component: ProductDeleteComponent },
  // {
  //   path: 'products/:id',
  //   component: ProductComponent,
  //   children: [
  //     { path: '',       component: ProductComponent},
  //     { path: 'edit',   component: ProductEditComponent},
  //     { path: 'delete', component: ProductDeleteComponent}
  //   ]
  // },
  { path: '**',           component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
