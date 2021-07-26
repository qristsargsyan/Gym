import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesManagementRoutingModule } from './services-management-routing.module';
import { ServicesManagementComponent } from './services-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ServicesManagementComponent
  ],
  imports: [
    CommonModule,
    ServicesManagementRoutingModule,
    SharedModule
  ]
})
export class ServicesManagementModule { }
