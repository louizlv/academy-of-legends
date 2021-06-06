import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroChamp'
})
export class FiltroChampPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase() + '!!!';
  }

}
