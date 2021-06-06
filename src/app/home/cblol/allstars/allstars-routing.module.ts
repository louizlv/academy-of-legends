import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllstarsPage } from './allstars.page';

const routes: Routes = [
  {
    path: '',
    component: AllstarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllstarsPageRoutingModule {}
