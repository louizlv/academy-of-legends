import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlistarPage } from './alistar.page';

const routes: Routes = [
  {
    path: '',
    component: AlistarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlistarPageRoutingModule {}
