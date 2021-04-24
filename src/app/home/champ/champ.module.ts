import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampPageRoutingModule } from './champ-routing.module';

import { ChampPage } from './champ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampPageRoutingModule
  ],
  declarations: [ChampPage]
})
export class ChampPageModule {}
