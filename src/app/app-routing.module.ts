import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import('./home-management/home-management.module').then(mod=>mod.HomeManagementModule)
  },
  {
    path:'banner',
    loadChildren:() => import('./banner-management/banner-management.module').then(mod=>mod.BannerManagementModule)
  },
  {
    path:'contact',
    loadChildren:() => import('./contact-management/contact-management.module').then(mod=>mod.ContactManagementModule)
  },
  {
    path:'services',
    loadChildren:() => import('./services-management/services-management.module').then(mod=>mod.ServicesManagementModule)
  },
  {
    path:'news',
    loadChildren:() => import('./news-management/news-management.module').then(mod=>mod.NewsManagementModule)
  },
  {
    path:'trainer',
    loadChildren:() => import('./trainer-management/trainer-management.module').then(mod=>mod.TrainerManagementModule)
  },
  {
    path:'gallery',
    loadChildren:() => import('./gallery-management/gallery-management.module').then(mod=>mod.GalleryManagementModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home/index'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
