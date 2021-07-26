import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsManagementRoutingModule } from './news-management-routing.module';
import { NewsManagementComponent } from './news-management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewsManagementComponent
  ],
  imports: [
    CommonModule,
    NewsManagementRoutingModule,
    SharedModule
  ]
})
export class NewsManagementModule { }
