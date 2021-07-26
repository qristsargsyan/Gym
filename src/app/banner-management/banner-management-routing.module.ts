import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerManagementComponent } from './banner-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'banner',
      component:BannerManagementComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerManagementRoutingModule { }
