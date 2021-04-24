import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CblolPageRoutingModule } from './cblol-routing.module';

import { CblolPage } from './cblol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CblolPageRoutingModule
  ],
  declarations: [CblolPage]
})
export class CblolPageModule {}
