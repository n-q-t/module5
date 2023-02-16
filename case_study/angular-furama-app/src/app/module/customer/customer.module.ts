import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from '../../component/customer/customer-list/customer-list.component';
import { CustomerEditComponent } from '../../component/customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from '../../component/customer/customer-create/customer-create.component';
import {FacilityModule} from '../facility/facility.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [CustomerListComponent, CustomerEditComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FacilityModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class CustomerModule { }
