import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'home',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'imagedetail',
    loadChildren: () => import('./imagedetail/imagedetail.module').then( m => m.ImagedetailPageModule)
  },
  {
    path: 'imagedetail copy',
    loadChildren: () => import('./imagedetailCopy/imagedetail.module').then( m => m.ImagedetailCopyPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
