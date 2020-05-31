import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagedetailCopyPage } from './imagedetail.page';

const routes: Routes = [
  {
    path: '',
    component: ImagedetailCopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagedetailPageRoutingModule {}
