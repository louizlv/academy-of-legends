import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsiPageRoutingModule } from './msi-routing.module';

import { MsiPage } from './msi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsiPageRoutingModule
  ],
  declarations: [MsiPage]
})
export class MsiPageModule {}
