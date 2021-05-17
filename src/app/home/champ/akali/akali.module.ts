import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkaliPageRoutingModule } from './akali-routing.module';

import { AkaliPage } from './akali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkaliPageRoutingModule
  ],
  declarations: [AkaliPage]
})
export class AkaliPageModule {}
