import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutManagementComponent } from './about-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'about',
      component:AboutManagementComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutManagementRoutingModule { }
