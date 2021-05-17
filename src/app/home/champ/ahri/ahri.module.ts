import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhriPageRoutingModule } from './ahri-routing.module';

import { AhriPage } from './ahri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhriPageRoutingModule
  ],
  declarations: [AhriPage]
})
export class AhriPageModule {}
