import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagementRoutingModule } from './contact-management-routing.module';
import { ContactManagementComponent } from './contact-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactManagementComponent
  ],
  imports: [
    CommonModule,
    ContactManagementRoutingModule,
    SharedModule
  ]
})
export class ContactManagementModule { }
