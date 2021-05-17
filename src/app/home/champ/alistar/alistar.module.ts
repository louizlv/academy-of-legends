import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlistarPageRoutingModule } from './alistar-routing.module';

import { AlistarPage } from './alistar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlistarPageRoutingModule
  ],
  declarations: [AlistarPage]
})
export class AlistarPageModule {}
