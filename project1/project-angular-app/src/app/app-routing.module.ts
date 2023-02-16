import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'edit/:id',component:ProductEditComponent},
  {path:'create',component:ProductCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
