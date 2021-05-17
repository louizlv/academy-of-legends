import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmumuPageRoutingModule } from './amumu-routing.module';

import { AmumuPage } from './amumu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmumuPageRoutingModule
  ],
  declarations: [AmumuPage]
})
export class AmumuPageModule {}
