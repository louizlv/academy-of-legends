import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampPage } from './champ.page';

const routes: Routes = [
  {
    path: '',
    component: ChampPage
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then( m => m.CharacterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampPageRoutingModule { }
