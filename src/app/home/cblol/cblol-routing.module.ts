import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CblolPage } from './cblol.page';

const routes: Routes = [
  {
    path: '',
    component: CblolPage
  },  {
    path: 'academy',
    loadChildren: () => import('./academy/academy.module').then( m => m.AcademyPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'mundial',
    loadChildren: () => import('./mundial/mundial.module').then( m => m.MundialPageModule)
  },
  {
    path: 'msi',
    loadChildren: () => import('./msi/msi.module').then( m => m.MsiPageModule)
  },
  {
    path: 'allstars',
    loadChildren: () => import('./allstars/allstars.module').then( m => m.AllstarsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CblolPageRoutingModule {}
