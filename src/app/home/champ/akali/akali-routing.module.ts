import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkaliPage } from './akali.page';

const routes: Routes = [
  {
    path: '',
    component: AkaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkaliPageRoutingModule {}
