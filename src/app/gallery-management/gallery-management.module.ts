import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryManagementRoutingModule } from './gallery-management-routing.module';
import { GalleryManagementComponent } from './gallery-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GalleryManagementComponent
  ],
  imports: [
    CommonModule,
    GalleryManagementRoutingModule,
    SharedModule
  ]
})
export class GalleryManagementModule { }
