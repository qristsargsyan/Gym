import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagementComponent } from './contact-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'contact',
      component:ContactManagementComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManagementRoutingModule { }
