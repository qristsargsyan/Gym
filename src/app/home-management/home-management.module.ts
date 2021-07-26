import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeManagementRoutingModule } from './home-management-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeManagementRoutingModule,
    SharedModule
  ]
})
export class HomeManagementModule { }
