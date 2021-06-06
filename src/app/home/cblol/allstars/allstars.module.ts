import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllstarsPageRoutingModule } from './allstars-routing.module';

import { AllstarsPage } from './allstars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllstarsPageRoutingModule
  ],
  declarations: [AllstarsPage]
})
export class AllstarsPageModule {}
