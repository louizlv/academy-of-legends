import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsiPage } from './msi.page';

const routes: Routes = [
  {
    path: '',
    component: MsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsiPageRoutingModule {}
