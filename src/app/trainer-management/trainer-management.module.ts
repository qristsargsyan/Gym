import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerManagementRoutingModule } from './trainer-management-routing.module';
import { TrainerManagementComponent } from './trainer-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TrainerManagementComponent
  ],
  imports: [
    CommonModule,
    TrainerManagementRoutingModule,
    SharedModule
  ]
})
export class TrainerManagementModule { }
