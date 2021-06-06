import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroChampPipe } from './filtro-champ.pipe'



@NgModule({
  declarations: [FiltroChampPipe],
  exports: [FiltroChampPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
