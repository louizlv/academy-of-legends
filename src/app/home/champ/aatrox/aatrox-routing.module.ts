import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AatroxPage } from './aatrox.page';

const routes: Routes = [
  {
    path: '',
    component: AatroxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AatroxPageRoutingModule {}
