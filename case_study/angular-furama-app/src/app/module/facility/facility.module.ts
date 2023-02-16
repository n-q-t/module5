import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityListComponent } from '../../component/facility/facility-list/facility-list.component';
import { FacilityEditComponent } from '../../component/facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from '../../component/facility/facility-create/facility-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NarBarComponent} from '../../component/nar-bar/nar-bar.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [FacilityListComponent, FacilityEditComponent, FacilityCreateComponent,NarBarComponent],
  exports: [
    NarBarComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class FacilityModule { }
