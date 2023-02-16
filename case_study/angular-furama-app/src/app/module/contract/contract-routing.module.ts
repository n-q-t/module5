import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractListComponent} from '../../component/contract/contract-list/contract-list.component';
import {ContractCreateComponent} from '../../component/contract/contract-create/contract-create.component';
import {ContractEditComponent} from '../../component/contract/contract-edit/contract-edit.component';

const routes: Routes = [{
path:'contract',children:[
    {path:'',component:ContractListComponent},
    {path:'create',component:ContractCreateComponent},
    {path:'edit/:id',component:ContractEditComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
