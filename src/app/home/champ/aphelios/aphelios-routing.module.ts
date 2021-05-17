import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApheliosPage } from './aphelios.page';

const routes: Routes = [
  {
    path: '',
    component: ApheliosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApheliosPageRoutingModule {}
