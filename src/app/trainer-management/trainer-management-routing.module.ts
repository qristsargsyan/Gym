import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerManagementComponent } from './trainer-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'trainer',
      component:TrainerManagementComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerManagementRoutingModule { }
