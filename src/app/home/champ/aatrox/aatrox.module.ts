import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AatroxPageRoutingModule } from './aatrox-routing.module';

import { AatroxPage } from './aatrox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AatroxPageRoutingModule
  ],
  declarations: [AatroxPage]
})
export class AatroxPageModule {}
