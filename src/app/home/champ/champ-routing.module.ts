import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampPage } from './champ.page';

const routes: Routes = [
  {
    path: '',
    component: ChampPage
  },
  {
    path: 'aatrox',
    loadChildren: () => import('./aatrox/aatrox.module').then( m => m.AatroxPageModule)
  },  {
    path: 'akali',
    loadChildren: () => import('./akali/akali.module').then( m => m.AkaliPageModule)
  },
  {
    path: 'amumu',
    loadChildren: () => import('./amumu/amumu.module').then( m => m.AmumuPageModule)
  },
  {
    path: 'ahri',
    loadChildren: () => import('./ahri/ahri.module').then( m => m.AhriPageModule)
  },
  {
    path: 'aphelios',
    loadChildren: () => import('./aphelios/aphelios.module').then( m => m.ApheliosPageModule)
  },
  {
    path: 'alistar',
    loadChildren: () => import('./alistar/alistar.module').then( m => m.AlistarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampPageRoutingModule {}
