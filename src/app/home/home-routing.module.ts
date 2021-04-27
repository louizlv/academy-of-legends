import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'champ',
        loadChildren: () => import('./champ/champ.module').then(m => m.ChampPageModule)
      },
      {
        path: 'atualizacao',
        loadChildren: () => import('./atualizacao/atualizacao.module').then(m => m.AtualizacaoPageModule)
      },
      {
        path: 'cblol',
        loadChildren: () => import('./cblol/cblol.module').then(m => m.CblolPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
