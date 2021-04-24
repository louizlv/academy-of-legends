import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CblolPage } from './cblol.page';

const routes: Routes = [
  {
    path: '',
    component: CblolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CblolPageRoutingModule {}
