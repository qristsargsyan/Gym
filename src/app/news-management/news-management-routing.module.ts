import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsManagementComponent } from './news-management.component';

const routes: Routes = [
  {
      path:'',
      children:[{
      path:'news',
      component:NewsManagementComponent
  }]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsManagementRoutingModule { }
