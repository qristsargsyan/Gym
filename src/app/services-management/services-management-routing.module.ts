import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesManagementComponent } from './services-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'services',
      component:ServicesManagementComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesManagementRoutingModule { }
