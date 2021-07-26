import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutManagementRoutingModule } from './about-management-routing.module';
import { AboutManagementComponent } from './about-management.component';


@NgModule({
  declarations: [
    AboutManagementComponent
  ],
  imports: [
    CommonModule,
    AboutManagementRoutingModule
  ]
})
export class AboutManagementModule { }
