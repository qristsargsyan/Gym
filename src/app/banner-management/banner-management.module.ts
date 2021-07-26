import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerManagementRoutingModule } from './banner-management-routing.module';
import { BannerManagementComponent } from './banner-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BannerManagementComponent
  ],
  imports: [
    CommonModule,
    BannerManagementRoutingModule,
    SharedModule

  ]

})
export class BannerManagementModule { }
