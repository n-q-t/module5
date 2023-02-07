import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import {NarBarComponent} from '../nar-bar/nar-bar.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FacilityListComponent, FacilityEditComponent, FacilityCreateComponent,NarBarComponent],
    imports: [
        CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,

    ]
})
export class FacilityModule { }
