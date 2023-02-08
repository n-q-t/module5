import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {FacilityModule} from '../facility/facility.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ContractEditComponent } from './contract-edit/contract-edit.component';


@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent, ContractEditComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FacilityModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
