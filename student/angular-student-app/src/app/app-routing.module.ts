import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentEditComponent} from "./student/student-edit/student-edit.component";
import {StudentCreateComponent} from "./student/student-create/student-create.component";

const routes: Routes = [
  {path:'',component:StudentListComponent},
  {path:'edit/:id',component:StudentEditComponent},
  {path:'create',component:StudentCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
