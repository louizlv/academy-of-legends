import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroChamp'
})
export class FiltroChampPipe implements PipeTransform {

  /*Não houve outro jeito a não ser modelar o pipe pra cada caso específico, porque cada um era bem diferente do outro
  Também tentamos remover tudo que estiver dentro de <> mas isso conflitava com a própria função, e ele não entendia isso*/
  
  transform(value: string): string {
    let result = value.replace(/<br>/g,'');
    result = result.replace(/<font color='#FFF673'>/g,'');
    result = result.replace(/<font color='#9b0f5f'>/g,'');
    result = result.replace('</font>','');
    result = result.replace('</font>','');
    result = result.replace(/<physicalDamage>/g,'');
    result = result.replace('</physicalDamage>','');
    return result;
  }

}
