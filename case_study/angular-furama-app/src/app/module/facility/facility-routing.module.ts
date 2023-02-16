import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from '../../component/facility/facility-list/facility-list.component';
import {FacilityEditComponent} from '../../component/facility/facility-edit/facility-edit.component';
import {FacilityCreateComponent} from '../../component/facility/facility-create/facility-create.component';

const routes: Routes = [{
  path:'facility',children:[
    {path:'',component:FacilityListComponent},
    {path:'edit/:id',component:FacilityEditComponent},
    {path:'create',component:FacilityCreateComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
