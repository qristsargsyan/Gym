import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryManagementComponent } from './gallery-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'gallery',
      component:GalleryManagementComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryManagementRoutingModule { }
