import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProductModule} from "../product/product.module";
import {CategoryModule} from "../category/category.module";


@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ProductModule,
    CategoryModule,
  ]
})
export class SharedModule {
}
