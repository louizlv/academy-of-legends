import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MundialPage } from './mundial.page';

const routes: Routes = [
  {
    path: '',
    component: MundialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MundialPageRoutingModule {}
