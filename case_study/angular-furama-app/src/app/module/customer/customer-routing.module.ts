import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from '../../component/customer/customer-list/customer-list.component';
import {CustomerEditComponent} from '../../component/customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from '../../component/customer/customer-create/customer-create.component';

const routes: Routes = [{
  path:'customer',children:[
    {path:'',component:CustomerListComponent},
    {path:'edit/:id',component:CustomerEditComponent},
    {path:'create',component:CustomerCreateComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
