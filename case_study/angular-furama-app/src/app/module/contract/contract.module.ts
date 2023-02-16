import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from '../../component/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from '../../component/contract/contract-create/contract-create.component';
import {FacilityModule} from '../facility/facility.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ContractEditComponent } from '../../component/contract/contract-edit/contract-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent, ContractEditComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FacilityModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ContractModule { }
