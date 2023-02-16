import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[NgxPaginationModule]
})
export class AppModule { }
