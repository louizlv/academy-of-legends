import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmumuPage } from './amumu.page';

const routes: Routes = [
  {
    path: '',
    component: AmumuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmumuPageRoutingModule {}
