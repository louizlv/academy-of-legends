import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundialPageRoutingModule } from './mundial-routing.module';

import { MundialPage } from './mundial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundialPageRoutingModule
  ],
  declarations: [MundialPage]
})
export class MundialPageModule {}
